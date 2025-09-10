import { PageHeader } from "@/components/page-header";
import Link from "next/link";

const games = [
  {
    title: "Prime Detection",
    description: "Check if a number is prime using the Rabin-Miller algorithm.",
    href: "/member/cp-game/prime-checker",
  },
  {
    title: "Shortest Path Visualiser",
    description: "Visualize shortest path algorithms like Dijkstra's and A*.",
    href: "#",
  },
  {
    title: "Generate Test Case",
    description: "Generate test cases for your competitive programming problems.",
    href: "#",
  },
  {
    title: "Multiplayer Arena",
    description: "Compete with other members in real-time coding challenges.",
    href: "#",
  },
];

export default function CpGamePage() {
  return (
    <div>
      <PageHeader title="CP Games" description="A collection of games and tools for competitive programmers." />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <Link href={game.href} key={game.title}>
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-bold">{game.title}</h3>
                <p className="text-gray-500">{game.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}