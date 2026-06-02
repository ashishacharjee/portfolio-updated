"use client";
import Image from "next/image";

export default function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
    />
  );
}