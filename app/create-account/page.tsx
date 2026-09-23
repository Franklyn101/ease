"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getRedirectResult,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";


const useRedirectFlow = process.env.NODE_ENV === "production";

export default function SignUpPage() {
  const [agreed, setAgreed] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!useRedirectFlow) return; 

    let mounted = true;

    async function handleRedirectResults() {
      try {
        const result = await getRedirectResult(auth);
        if (!mounted) return;
        if (result?.user) {
          router.push("/dashboard");
        }
      } catch (err: unknown) {
        if (!mounted) return;
        const message = err instanceof Error ? err.message : "google sign in failed";
        setError(message);
        isLoading(false);
      }
    }

    handleRedirectResults();
    return () => {
      mounted = false;
    };
  }, [router]);

  async function handleGoogleSignIn() {
    setError(null);
    isLoading(true);

    try {
      if (useRedirectFlow) {
        await signInWithRedirect(auth, googleProvider);
        
      } else {
        const result = await signInWithPopup(auth, googleProvider);
        if (result?.user) {
          router.push("/dashboard");
        }
        isLoading(false);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "unable to connect with google";
      setError(message);
      isLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center py-0 sm:py-10">
      <div className="w-full sm:max-w-md sm:rounded-2xl sm:shadow-xl sm:overflow-hidden bg-white min-h-screen sm:min-h-0">
        {/* Header */}
        <div className="relative bg-orange-500 px-6 pt-8 pb-6 overflow-hidden">
          {/* subtle diagonal pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0px, #fff 2px, transparent 2px, transparent 40px)",
            }}
          />
          <div className="relative">
            <h1 className="text-white text-2xl font-bold">EstateEaze</h1>
            <p className="mt-3 text-sm text-white/90">
              Already have an account?{" "}
              <a href="/login" className="font-semibold text-white underline underline-offset-2">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 pt-6 pb-8">
          <h2 className="text-base font-semibold text-neutral-900 mb-4">
            Create your account
          </h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-neutral-300 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <GoogleIcon />
            {loading ? "Signing in..." : "Login with Google"}
          </button>

          {error && (
            <p className="mt-3 text-sm text-red-600">{error}</p>
          )}

          <div className="flex items-center gap-4 my-5">
            <span className="h-px flex-1 bg-neutral-300" />
            <span className="text-sm font-semibold text-neutral-700">Or</span>
            <span className="h-px flex-1 bg-neutral-300" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <FloatingField label="Full Name" name="fullName" type="text" />
            <FloatingField label="Email" name="email" type="email" />
            <FloatingField
              label="Password"
              name="password"
              type="password"
              placeholder="6+ characters"
            />
            <FloatingField
              label="Password confirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="6+ characters"
            />

            <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-neutral-400 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-neutral-700">
                I agree to all Terms, Privacy Policy and Fees
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FloatingField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-neutral-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4c-2 1.5-4.7 2.5-7.7 2.5-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.6 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.6 5.4C41.4 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}