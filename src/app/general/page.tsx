import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function GeneralDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="General Dashboard"
        description="Welcome to the Competitive Coding Club!"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/general/contests">
          <Card>
            <CardHeader>
              <CardTitle>Club Contests</CardTitle>
              <CardDescription>View upcoming and past contests.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/general/announcements">
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Latest news and announcements.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/general/resources">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Learning resources and materials.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/general/official_contests">
          <Card>
            <CardHeader>
              <CardTitle>Official Contests</CardTitle>
              <CardDescription>View upcoming contests.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/login">
          <Card>
            <CardHeader>
              <CardTitle>Member Login</CardTitle>
              <CardDescription>Access member-exclusive features.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
