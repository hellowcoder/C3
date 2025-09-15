'use client';

import BubbleMenu from "@/components/ui/BubbleMenu";

const items = [
  // {
  //   label: "Home",
  //   href: "/general",
  //   ariaLabel: "Home",
  //   rotation: -8,
  //   hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  // },
  {
    label: "Member Login",
    href: "/login",
    ariaLabel: "Announcements",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Contests",
    href: "/general/contests",
    ariaLabel: "Contests",
    rotation: -8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Resources",
    href: "/general/resources",
    ariaLabel: "Resources",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "Official Contests",
    href: "/general/official_contests",
    ariaLabel: "Official Contests",
    rotation: 8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function GeneralPage() {
  return (
    <div className="min-h-screen w-full p-6">
      <h1 className="text-4xl font-bold text-center text-white">
        Welcome to the Club
      </h1>
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>C3</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </div>
  );
}