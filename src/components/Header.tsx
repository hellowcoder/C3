"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const showHeader = pathname !== "/";

  if (!showHeader) {
    return null;
  }

  return (
    <header className="p-4 border-b">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Coding Club
        </Link>
        <div className="flex gap-4">
          <Link href="/general">General</Link>
          <Link href="/member/dashboard">Member Dashboard</Link>
          <Link href="/member/attendance">Member Attendance</Link>
          <Link href="/member/contests">Member Contests</Link>
        </div>
      </nav>
    </header>
  );
}
