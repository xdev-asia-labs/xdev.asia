import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Firebase must only initialize on the client to avoid SSR prerender errors
// All consumers (AuthProvider, hooks) already run inside useEffect or client components
const isClient = typeof window !== "undefined";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: FirebaseApp = isClient
  ? (getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0])
  : (null as any);

// Initialize App Check with reCAPTCHA Enterprise
if (isClient) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LdnUKIsAAAAALVreZcYlvh36eDpNKBkaJDJKGhq"),
    isTokenAutoRefreshEnabled: true,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const auth: Auth = isClient ? getAuth(app) : (null as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db: Firestore = isClient ? getFirestore(app) : (null as any);
export default app;
