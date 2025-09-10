"use client"

import Link from "next/link"

export function SmallBubble({ 
  href,
  title,
  description
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href}>
      <div
        className="w-48 h-48 rounded-full bg-white/40 backdrop-blur-xl flex flex-col items-center justify-center text-center gap-2 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  )
}
