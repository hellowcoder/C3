"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for contest participation (present/absent)
const data = [
  { name: "Contest 1", present: 10, absent: 2 },
  { name: "Contest 2", present: 8, absent: 4 },
  { name: "Contest 3", present: 12, absent: 1 },
  { name: "Contest 4", present: 7, absent: 3 },
  { name: "Contest 5", present: 11, absent: 0 },
];

export function ParticipationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contest Participation</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#82ca9d" name="Present" />
            <Bar dataKey="absent" fill="#fa8072" name="Absent" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}