"use client";

import { useCallback } from "react";

const RECAPTCHA_SITE_KEY = "6LdnUKIsAAAAALVreZcYlvh36eDpNKBkaJDJKGhq";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

/**
 * Hook to generate reCAPTCHA Enterprise tokens for specific actions.
 * Use before sensitive operations like login, registration, comments.
 */
export function useRecaptcha() {
  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    if (typeof window === "undefined" || !window.grecaptcha) {
      console.warn("reCAPTCHA Enterprise not loaded");
      return null;
    }

    return new Promise((resolve) => {
      window.grecaptcha!.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha!.enterprise.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token);
        } catch (err) {
          console.error("reCAPTCHA execute failed:", err);
          resolve(null);
        }
      });
    });
  }, []);

  return { executeRecaptcha };
}
