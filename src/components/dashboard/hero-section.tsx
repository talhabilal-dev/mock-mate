"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative py-12 mb-16">
      <div className="glass-dark p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-600/10 opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">
                AI-Powered Practice
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Get Interview-Ready</span>
              <br />
              <span className="text-white">with Intelligent Feedback</span>
            </h1>

            <p className="text-gray-300 text-lg mb-6 max-w-lg">
              Practice real interview questions and get instant feedback. Master
              the skills that matter with personalized AI coaching.
            </p>

            <Button
              size="lg"
              className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold"
            >
              Start an Interview
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm h-80 bg-linear-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <Image src="/robot.png" alt="AI Interview Coach" width={500} height={500} />
                <p className="text-sm text-gray-300">AI Interview Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
