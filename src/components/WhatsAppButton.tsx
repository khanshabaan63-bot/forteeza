"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "compact" | "iconOnly";
  children?: React.ReactNode;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function WhatsAppButton({
  message = "Hello Forteeza Safe Company, I would like to know more about your safes and security products.",
  className,
  variant = "primary",
  children,
  showIcon = true,
  size = "md",
}: WhatsAppButtonProps) {
  const encodedText = encodeURIComponent(message.trim());
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedText}`;

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-olive-600 focus:ring-offset-2 active:scale-[0.98] cursor-pointer select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded gap-1.5",
    md: "text-sm px-4 py-2.5 rounded gap-2",
    lg: "text-base px-6 py-3.5 rounded-md gap-2.5 tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-olive-700 hover:bg-olive-800 text-white shadow-soft hover:shadow-soft-lg border border-olive-800",
    secondary:
      "bg-charcoal-900 hover:bg-charcoal-950 text-white shadow-soft border border-charcoal-800",
    outline:
      "bg-transparent hover:bg-olive-50 text-olive-800 border-2 border-olive-700",
    compact:
      "bg-olive-100 hover:bg-olive-200 text-olive-900 border border-olive-300 text-xs px-2.5 py-1 rounded",
    iconOnly:
      "bg-olive-700 hover:bg-olive-800 text-white p-3 rounded-full shadow-soft-lg",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp with Forteeza Safe Company"
      className={cn(
        baseStyles,
        variant !== "iconOnly" && sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {showIcon && (
        <MessageCircle
          className={cn(
            variant === "iconOnly" ? "w-6 h-6" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
            "shrink-0"
          )}
        />
      )}
      {children || <span>ENQUIRE ON WHATSAPP</span>}
    </a>
  );
}
