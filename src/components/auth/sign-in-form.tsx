"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Email
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="bg-white/5 p-5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Password
        </label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="bg-white/5 border-white/10 p-5 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 pr-10"
          />
          <Button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2  -translate-y-1/2 text-gray-400 hover:text-gray-300 bg-transparent hover:bg-transparent"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <a
          href="#"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 h-11 text-base font-semibold"
      >
        Sign In
      </Button>
    </form>
  );
}
