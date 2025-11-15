"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap } from "lucide-react";

interface InterviewCardProps {
  title: string;
  type: "Technical" | "Non-Technical";
  description: string;
  icon: string;
  date?: string;
  rating?: string;
  variant: "past" | "available";
}

export function InterviewCard({
  title,
  type,
  description,
  icon,
  date,
  rating,
  variant,
}: InterviewCardProps) {
  const typeColor =
    type === "Technical"
      ? "bg-blue-500/20 text-blue-300"
      : "bg-purple-500/20 text-purple-300";
//   const typeText = type === "Technical" ? "text-blue-300" : "text-purple-300";

  return (
    <Card className="glass-dark hover-glow group overflow-hidden border-white/10">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="text-4xl">{icon}</div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColor}`}
            >
              {type}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>

            {variant === "past" && date && rating && (
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>📅 {date}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {rating}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <Zap className="w-4 h-4 text-purple-400" />
            </div>

            <Button
              size="sm"
              className={`rounded-full font-semibold transition-all ${
                variant === "past"
                  ? "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
                  : "bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              }`}
            >
              {variant === "past" ? "View Interview" : "Take Interview"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
