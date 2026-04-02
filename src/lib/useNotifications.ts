"use client";

import { useEffect, useState, useCallback } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/AuthProvider";

export interface NotificationItem {
  slug: string;
  title: string;
  excerpt: string | null;
  featured_image: string | null;
  category: string | null;
  category_slug: string | null;
  published_at: string | null;
}

export function useNotifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lastSeenAt, setLastSeenAt] = useState<string | null>(null);

  // Fetch recent posts and compare with lastSeenAt
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        // Fetch recent posts
        const res = await fetch("/api/recent-posts/");
        if (!res.ok) throw new Error("Failed to fetch");
        const posts: NotificationItem[] = await res.json();

        if (cancelled) return;
        setNotifications(posts);

        // Get lastSeenAt from Firestore if logged in, or localStorage
        let seen: string | null = null;

        if (user) {
          try {
            const docRef = doc(db, "users", user.uid, "preferences", "notifications");
            const snap = await getDoc(docRef);
            if (snap.exists()) {
              seen = snap.data().lastSeenAt || null;
            }
          } catch {
            // fallback to localStorage
          }
        }

        if (!seen) {
          seen = typeof window !== "undefined" ? localStorage.getItem("xdev_last_seen") : null;
        }

        if (cancelled) return;
        setLastSeenAt(seen);

        // Count unread
        if (seen) {
          const seenDate = new Date(seen).getTime();
          const unread = posts.filter(
            (p) => p.published_at && new Date(p.published_at).getTime() > seenDate
          ).length;
          setUnreadCount(unread);
        } else {
          // First visit — show up to 5 as "new"
          setUnreadCount(Math.min(posts.length, 5));
        }
      } catch {
        // ignore fetch errors
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [user]);

  const markAllRead = useCallback(async () => {
    const now = new Date().toISOString();
    setUnreadCount(0);
    setLastSeenAt(now);

    // Persist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("xdev_last_seen", now);
    }

    // Persist to Firestore if logged in
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid, "preferences", "notifications");
        await setDoc(docRef, { lastSeenAt: now, updatedAt: serverTimestamp() }, { merge: true });
      } catch {
        // ignore
      }
    }
  }, [user]);

  const unreadNotifications = notifications.filter(
    (p) => !lastSeenAt || (p.published_at && new Date(p.published_at).getTime() > new Date(lastSeenAt).getTime())
  );

  return {
    notifications,
    unreadNotifications,
    unreadCount,
    loading,
    markAllRead,
  };
}
