"use client";

import { useState } from "react";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { SignInForm } from "@/components/auth/sign-in-form";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="glass-dark p-8 md:p-10 space-y-8">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-white">Mock Mate</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Master Your Interviews
            </h1>
            <p className="text-gray-400 text-sm">
              AI-powered practice for technical success
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </div>

          {/* Toggle */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-center text-gray-400 text-sm">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className="mt-0 text-gray-400"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(42, 24, 71) 100%)",
                  }}
                >
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="glass hover:glass-dark p-3 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 text-sm">
                Google
              </button>
              <button className="glass hover:glass-dark p-3 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/30 text-sm">
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
