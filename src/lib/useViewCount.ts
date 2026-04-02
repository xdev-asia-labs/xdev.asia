"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * Hook to track and display real-time view count for a post/page.
 * Increments once per session per slug (using sessionStorage).
 */
export function useViewCount(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    const sessionKey = `viewed_${slug}`;
    const docRef = doc(db, "viewCounts", slug);

    async function trackView() {
      try {
        // Increment if not already counted this session
        if (!sessionStorage.getItem(sessionKey)) {
          await setDoc(docRef, { count: increment(1) }, { merge: true });
          sessionStorage.setItem(sessionKey, "1");
        }

        // Read current count
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setViews(snap.data().count);
        } else {
          setViews(0);
        }
      } catch {
        // Firestore unavailable — silently fail, show nothing
        setViews(null);
      }
    }

    trackView();
  }, [slug]);

  return views;
}
