import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex gap-4 mt-8 mb-8">
        <Link href="/general" passHref>
          <Button variant="outline">General</Button>
        </Link>
        <Link href="/dashboard" passHref>
          <Button>Members</Button>
        </Link>
      </div>
    </div>
  );
}
