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
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/attendance">Attendance</Link>
          <Link href="/contests">Contests</Link>
        </div>
      </nav>
    </header>
  );
}
