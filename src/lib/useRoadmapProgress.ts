"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/AuthProvider";

interface RoadmapProgressDoc {
    roadmapSlug: string;
    completedNodeKeys: string[];
    updated_at: string;
}

export function useRoadmapProgress(roadmapSlug: string) {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [completedNodeKeys, setCompletedNodeKeys] = useState<string[]>([]);

    useEffect(() => {
        if (!user) {
            setCompletedNodeKeys([]);
            setLoading(false);
            return;
        }
        const currentUser = user;

        let mounted = true;
        async function fetchProgress() {
            setLoading(true);
            try {
                const docRef = doc(db, "users", currentUser.uid, "roadmapProgress", roadmapSlug);
                const snap = await getDoc(docRef);
                if (!mounted) return;
                if (snap.exists()) {
                    const data = snap.data() as RoadmapProgressDoc;
                    setCompletedNodeKeys(Array.isArray(data.completedNodeKeys) ? data.completedNodeKeys : []);
                } else {
                    setCompletedNodeKeys([]);
                }
            } catch {
                if (mounted) setCompletedNodeKeys([]);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchProgress();
        return () => {
            mounted = false;
        };
    }, [user, roadmapSlug]);

    const completedSet = useMemo(() => new Set(completedNodeKeys), [completedNodeKeys]);

    const isCompleted = useCallback((nodeKey: string) => completedSet.has(nodeKey), [completedSet]);

    const toggleNode = useCallback(
        async (nodeKey: string) => {
            if (!user) return false;

            const exists = completedSet.has(nodeKey);
            const next = exists
                ? completedNodeKeys.filter((k) => k !== nodeKey)
                : [...completedNodeKeys, nodeKey];

            try {
                const docRef = doc(db, "users", user.uid, "roadmapProgress", roadmapSlug);
                const payload: RoadmapProgressDoc = {
                    roadmapSlug,
                    completedNodeKeys: next,
                    updated_at: new Date().toISOString(),
                };
                await setDoc(docRef, payload);
                setCompletedNodeKeys(next);
                return !exists;
            } catch {
                return exists;
            }
        },
        [user, completedSet, completedNodeKeys, roadmapSlug]
    );

    return {
        loading,
        completedNodeKeys,
        completedCount: completedNodeKeys.length,
        isCompleted,
        toggleNode,
    };
}
