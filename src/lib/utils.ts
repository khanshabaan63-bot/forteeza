import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a direct WhatsApp click-to-chat URL with the official Forteeza Safe Company number and encoded message.
 */
export function getWhatsAppUrl(message?: string): string {
  const number = "918076009057";
  const defaultMsg = "Hello Forteeza Safe Company, I would like to know more about your safes and security products.";
  const encoded = encodeURIComponent((message || defaultMsg).trim());
  return `https://wa.me/${number}?text=${encoded}`;
}
