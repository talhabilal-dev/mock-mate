"use client";

import { useState } from "react";
import { Eye, EyeOff, Upload, FileText, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null as File | null,
    resume: null as File | null,
  });
  const [fileNames, setFileNames] = useState({
    profilePicture: "",
    resume: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "profilePicture" | "resume"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
      setFileNames((prev) => ({ ...prev, [fieldName]: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name and Email - 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Full Name
          </label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

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
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Password and Confirm Password - 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              placeholder="Create a strong password"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Confirm Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* File Uploads - 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Profile Picture
          </label>
          <div className="relative">
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "profilePicture")}
              className="hidden"
            />
            <label
              htmlFor="profilePicture"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 border-dashed hover:border-blue-500/50 hover:bg-white/10 cursor-pointer transition-all group"
            >
              <ImageIcon
                size={18}
                className="text-gray-400 group-hover:text-blue-400 transition-colors"
              />
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {fileNames.profilePicture
                  ? fileNames.profilePicture
                  : "Upload profile picture"}
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Resume (PDF)
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "resume")}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 border-dashed hover:border-purple-500/50 hover:bg-white/10 cursor-pointer transition-all group"
            >
              <FileText
                size={18}
                className="text-gray-400 group-hover:text-purple-400 transition-colors"
              />
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {fileNames.resume ? fileNames.resume : "Upload resume"}
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 mt-6 h-11 text-base font-semibold"
      >
        Create Account
      </Button>
    </form>
  );
}
