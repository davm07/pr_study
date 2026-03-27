"use client";

import {
  LoginSvg,
  GoogleIconComponent,
  FacebookIconComponent,
} from "../../components/decorative/SVGs";
import { User, Eye } from "lucide-react";
import { Input } from "../../components/Input";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main
      className={`flex h-screen p-4 gap-24
      ${mode === "signup" ? "flex-row-reverse" : ""}
      `}
    >
      <div className="flex justify-center flex-col flex-1 gap-12 items-center">
        <h1 className="font-heading text-4xl text-athens-gray-950 text-left w-96">
          {mode === "login" ? "Log In" : "Create an account"}
        </h1>

        <motion.div
          layout
          transition={{ duration: 0.5 }}
          className="flex justify-center flex-col flex-1 gap-12 items-center"
        >
          <form className="flex flex-col gap-8 w-96">
            <label
              htmlFor="username"
              className="text-athens-gray-950 font-semibold"
            >
              Username
              <Input
                icon={User}
                type="text"
                placeholder="Username"
                id="username"
              />
            </label>
            <label
              htmlFor="password"
              className="text-athens-gray-950 font-semibold"
            >
              Password
              <Input
                icon={Eye}
                type="password"
                placeholder="Password"
                id="password"
              />
            </label>
            {mode === "signup" && (
              <label
                htmlFor="confirm-password"
                className="text-athens-gray-950 font-semibold"
              >
                Confirm Password
                <Input
                  icon={Eye}
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm-password"
                />
              </label>
            )}
            <button
              type="submit"
              className="bg-roman-500 px-2 py-3 rounded-lg font-bold font-heading text-lg tracking-wider hover:bg-roman-400 transition-all"
            >
              {mode === "login" ? "Log In" : "Sign Up"}
            </button>
          </form>
        </motion.div>

        <p className="text-sm text-roman-800 text-center w-96">
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="text-roman-900 hover:underline transition-all font-semibold"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>

        <div className="flex flex-col gap-4 w-96">
          <div className="flex flex-row items-center gap-2">
            <div className="flex-1 h-px bg-athens-gray-950"></div>
            <p className="text-athens-gray-950 font-heading text-lg">
              {mode === "login" ? "or continue with" : "or sign up with"}
            </p>
            <div className="flex-1 h-px bg-athens-gray-950"></div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <button
              type="button"
              className="flex items-center bg-roman-200 p-3 rounded-full hover:scale-110 transition-all"
            >
              <GoogleIconComponent width={42} height={42} />
            </button>
            <button
              type="button"
              className="flex items-center bg-roman-200 p-3 rounded-full hover:scale-110 transition-all"
            >
              <FacebookIconComponent width={42} height={42} />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        layout
        transition={{ duration: 0.5 }}
        className="w-full h-full bg-roman-400 flex flex-col items-center justify-center p-10 flex-1 rounded-2xl gap-8"
      >
        <div className="w-full h-full bg-roman-400 flex flex-col items-center justify-center p-10 flex-1 rounded-2xl gap-8">
          <LoginSvg className="h-5/6 w-full" />
          <div>
            <p className="text-2xl font-bold font-heading tracking-wider">
              Upload your study materials.
            </p>
            <p>
              Get AI-powered summaries and a personalized study plan based on
              your exam dates.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
