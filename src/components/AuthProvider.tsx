"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    type ReactNode,
} from "react";
import {
    onAuthStateChanged,
    signInWithPopup,
    signOut as firebaseSignOut,
    GoogleAuthProvider,
    GithubAuthProvider,
    type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";


interface AuthContextValue {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signInWithGitHub: () => Promise<void>;
    signOut: () => Promise<void>;

    showLoginModal: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    loading: true,
    signInWithGoogle: async () => { },
    signInWithGitHub: async () => { },
    signOut: async () => { },

    showLoginModal: false,
    openLoginModal: () => { },
    closeLoginModal: () => { },
});

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signInWithGoogle = useCallback(async () => {
        await signInWithPopup(auth, googleProvider);
    }, []);

    const signInWithGitHub = useCallback(async () => {
        await signInWithPopup(auth, githubProvider);
    }, []);

    const signOut = useCallback(async () => {
        await firebaseSignOut(auth);
    }, []);

    const openLoginModal = useCallback(() => setShowLoginModal(true), []);
    const closeLoginModal = useCallback(() => setShowLoginModal(false), []);

    return (
        <AuthContext value={{ user, loading, signInWithGoogle, signInWithGitHub, signOut, showLoginModal, openLoginModal, closeLoginModal }}>
            {children}
        </AuthContext>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
