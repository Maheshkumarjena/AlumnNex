// lib/utils.js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// utils.js
export const getBackendURL = () => {
  return process.env.NEXT_PUBLIC_BACKEND_SERVER;
};
