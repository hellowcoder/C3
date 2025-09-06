export const mockStudents = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    contestParticipation: [
      { contestId: "1", participated: true },
      { contestId: "2", participated: false },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    contestParticipation: [
      { contestId: "1", participated: true },
      { contestId: "2", participated: true },
    ],
  },
];

export const mockContests = [
  {
    id: "1",
    name: "Codeforces Round #123",
    date: "2025-10-15",
  },
  {
    id: "2",
    name: "CodeChef Starters 45",
    date: "2025-10-20",
  },
];
