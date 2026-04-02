"use client";

import { useEffect, useState, useCallback } from "react";
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/AuthProvider";

export interface BookmarkItem {
    slug: string;
    title: string;
    excerpt: string | null;
    featured_image: string | null;
    category: string | null;
    bookmarked_at: string;
}

export function useBookmarks() {
    const { user } = useAuth();
    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch all bookmarks for current user
    useEffect(() => {
        if (!user) {
            setBookmarks([]);
            setLoading(false);
            return;
        }

        async function fetchBookmarks() {
            try {
                const colRef = collection(db, "users", user!.uid, "bookmarks");
                const snap = await getDocs(colRef);
                const items: BookmarkItem[] = [];
                snap.forEach((d) => {
                    items.push(d.data() as BookmarkItem);
                });
                items.sort((a, b) => new Date(b.bookmarked_at).getTime() - new Date(a.bookmarked_at).getTime());
                setBookmarks(items);
            } catch {
                // Firestore unavailable
            } finally {
                setLoading(false);
            }
        }

        fetchBookmarks();
    }, [user]);

    const isBookmarked = useCallback(
        (slug: string) => bookmarks.some((b) => b.slug === slug),
        [bookmarks]
    );

    const toggleBookmark = useCallback(
        async (item: Omit<BookmarkItem, "bookmarked_at">) => {
            if (!user) return false;

            const docRef = doc(db, "users", user.uid, "bookmarks", item.slug);
            const exists = bookmarks.some((b) => b.slug === item.slug);

            try {
                if (exists) {
                    await deleteDoc(docRef);
                    setBookmarks((prev) => prev.filter((b) => b.slug !== item.slug));
                } else {
                    const data: BookmarkItem = {
                        ...item,
                        bookmarked_at: new Date().toISOString(),
                    };
                    await setDoc(docRef, data);
                    setBookmarks((prev) => [data, ...prev]);
                }
                return !exists;
            } catch {
                return exists;
            }
        },
        [user, bookmarks]
    );

    return { bookmarks, loading, isBookmarked, toggleBookmark };
}

/**
 * Hook to subscribe/unsubscribe to email notifications for new posts.
 * Stores subscription in Firestore `subscribers` collection.
 */
export function useSubscription() {
    const { user } = useAuth();
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) {
            setSubscribed(false);
            setLoading(false);
            return;
        }

        async function checkSubscription() {
            try {
                const docRef = doc(db, "subscribers", user!.uid);
                const snap = await getDoc(docRef);
                setSubscribed(snap.exists() && snap.data()?.active === true);
            } catch {
                // ignore
            } finally {
                setLoading(false);
            }
        }

        checkSubscription();
    }, [user]);

    const toggleSubscription = useCallback(async () => {
        if (!user?.email) return;

        const docRef = doc(db, "subscribers", user.uid);

        try {
            if (subscribed) {
                await setDoc(docRef, { active: false }, { merge: true });
                setSubscribed(false);
            } else {
                await setDoc(docRef, {
                    email: user.email,
                    displayName: user.displayName || "",
                    active: true,
                    subscribedAt: serverTimestamp(),
                }, { merge: true });
                setSubscribed(true);
            }
        } catch {
            // ignore
        }
    }, [user, subscribed]);

    return { subscribed, loading, toggleSubscription };
}
