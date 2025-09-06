// app/general/page.tsx

"use client"

import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { motion } from "framer-motion"

const bubbles = [
  {
    href: "/general/contests",
    title: "Club Contests",
    desc: "View upcoming and past contests.",
    delay: 0,
  },
  {
    href: "/general/announcements",
    title: "Announcements",
    desc: "Latest news and announcements.",
    delay: 1,
  },
  {
    href: "/general/resources",
    title: "Resources",
    desc: "Learning resources and materials.",
    delay: 2,
  },
  {
    href: "/general/official_contests",
    title: "Official Contests",
    desc: "View upcoming contests.",
    delay: 1.5,
  },
  {
    href: "/login",
    title: "Member Login",
    desc: "Access member-exclusive features.",
    delay: 0.5,
  },
]

function FloatingBubble({
  title,
  desc,
  href,
  delay,
}: {
  title: string
  desc: string
  href: string
  delay: number
}) {
  return (
    <Link href={href}>
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
        }}
        transition={{
          duration: 6 + delay, // vary duration
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        }}
        className="w-56 h-56 rounded-full bg-white/40 backdrop-blur-xl flex flex-col items-center justify-center text-center gap-2 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
      </motion.div>
    </Link>
  )
}

export default function GeneralDashboardPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#7A85C1] via-[#9CA7DB] to-[#B6C0E8] text-gray-900 p-6">
      <PageHeader
        title="General Dashboard"
        description="Welcome to the Competitive Coding Club!"
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {bubbles.map((b) => (
          <FloatingBubble key={b.title} {...b} />
        ))}
      </div>
    </div>
  )
}
