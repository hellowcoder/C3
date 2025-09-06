"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for average rating over time
const data = [
  { date: "Jan", averageRating: 1200 },
  { date: "Feb", averageRating: 1250 },
  { date: "Mar", averageRating: 1300 },
  { date: "Apr", averageRating: 1280 },
  { date: "May", averageRating: 1350 },
  { date: "Jun", averageRating: 1400 },
  { date: "Jul", averageRating: 1380 },
  { date: "Aug", averageRating: 1450 },
  { date: "Sep", averageRating: 1500 },
  { date: "Oct", averageRating: 1480 },
  { date: "Nov", averageRating: 1550 },
  { date: "Dec", averageRating: 1600 },
];

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Progress</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="averageRating" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}