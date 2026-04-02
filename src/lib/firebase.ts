import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAI, getGenerativeModel, GoogleAIBackend, type GenerativeModel } from "firebase/ai";
import { getPerformance, type FirebasePerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyCXPcFu9GTx_8RR4ece2d2rGB1m5Q3ou00",
  authDomain: "xdev-asia.firebaseapp.com",
  projectId: "xdev-asia",
  storageBucket: "xdev-asia.firebasestorage.app",
  messagingSenderId: "638081415326",
  appId: "1:638081415326:web:2ac782326803e3f8fce38f",
  measurementId: "G-CXVDY07EE0",
};

// Firebase must only initialize on the client to avoid SSR prerender errors
// All consumers (AuthProvider, hooks) already run inside useEffect or client components
const isClient = typeof window !== "undefined";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: FirebaseApp = isClient
  ? (getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0])
  : (null as any);



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const auth: Auth = isClient ? getAuth(app) : (null as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db: Firestore = isClient ? getFirestore(app) : (null as any);

// Firebase AI Logic — Gemini 2.5 Flash (Google AI backend, free tier)
// Note: gemini-2.0-flash shuts down June 1, 2026 — using gemini-2.5-flash (stable)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gemini: GenerativeModel = isClient
  ? getGenerativeModel(getAI(app, { backend: new GoogleAIBackend() }), { model: "gemini-2.5-flash" })
  : (null as any);

// Firebase Performance Monitoring
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const perf: FirebasePerformance = isClient ? getPerformance(app) : (null as any);

export default app;
