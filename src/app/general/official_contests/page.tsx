'use client';
import { PageHeader } from "@/components/page-header";
import { useEffect, useState } from "react";

interface Contest {
  id: number;
  name: string;
  phase: string;
  startTimeSeconds: number;
  durationSeconds: number;
}

const formatDateTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${month}/${day}/${year} ${time}`;
};

const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

export default function ClubContestsPage() {
  const [upcomingContests, setUpcomingContests] = useState<Contest[]>([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch("https://codeforces.com/api/contest.list");
        const data = await response.json();
        if (data.status === "OK") {
          const allContests: Contest[] = data.result;
          const upcoming = allContests
            .filter((contest) => contest.phase === "BEFORE")
            .sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);
          setUpcomingContests(upcoming);
        }
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };

    fetchContests();
  }, []);

  return (
    <div>
      <PageHeader
        title="Official Contests"
        description="Upcoming contests on Codeforces."
      />
      <h2 className="text-2xl font-bold mb-4">Upcoming Contests</h2>
      <div className="flex flex-col gap-4">
        {upcomingContests.map((contest) => (
          <a key={contest.id} href={`https://codeforces.com/contests/${contest.id}`} target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{contest.name}</h3>
              <p>Length: {formatDuration(contest.durationSeconds)}</p>
            </div>
            <p>{formatDateTime(contest.startTimeSeconds)}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
