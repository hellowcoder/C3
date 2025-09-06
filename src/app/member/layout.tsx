import { Sidebar } from '@/components/Sidebar';

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}