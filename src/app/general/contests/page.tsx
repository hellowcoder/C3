import { PageHeader } from "@/components/page-header";

const contests = [
  {
    name: "August Short Contest - 2025",
    start: "Aug/12/2025 18:35",
    length: "02:00",
  },
  {
    name: "June Short Contest",
    start: "Jun/27/2025 16:35",
    length: "02:00",
  },
  {
    name: "Recruitment Contest - 2",
    start: "May/12/2025 16:00",
    length: "03:00",
  },
  {
    name: "Recruitment Contest - 1",
    start: "May/09/2025 16:30",
    length: "02:30",
  },
  {
    name: "April Short Contest",
    start: "Apr/20/2025 11:35",
    length: "01:30",
  },
  {
    name: "March Short Contest",
    start: "Mar/28/2025 18:35",
    length: "02:00",
  },
  {
    name: "Practice Contest - 2",
    start: "Mar/29/2025 09:35",
    length: "7:00:00",
  },
  {
    name: "Practice Contest - I",
    start: "Mar/04/2025 15:30",
    length: "7:00:00",
  },
];

export default function ClubContestsPage() {
  return (
    <div>
      <PageHeader
        title="Club Contests"
        description="Upcoming and past contests from the Codeforces group."
      />
      <div className="flex flex-col gap-4">
        {contests.map((contest, index) => (
          <div key={index} className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{contest.name}</h2>
              <p>Length: {contest.length}</p>
            </div>
            <p>{contest.start}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
