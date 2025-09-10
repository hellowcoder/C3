'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // Assuming cn utility exists for tailwind class merging

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/member/dashboard' },
    { name: 'Leaderboard', href: '/member/leaderboard' },
    { name: 'Attendance', href: '/member/attendance' },
    { name: 'Students', href: '/member/students' },
    { name: 'CP Game', href: '/member/cp-game' },
  ];

  return (
    <div className="flex flex-col space-y-2 p-4 border-r h-full">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center p-2 rounded-md text-sm font-medium',
            pathname === item.href
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}