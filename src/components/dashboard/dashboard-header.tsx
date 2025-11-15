"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "./logo";
import { Menu } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 glass-dark backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <Avatar className="cursor-pointer hover-glow">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
