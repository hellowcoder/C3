import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/40" />

      {/* Buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="/general" passHref>
          <Button className="px-8 py-4 text-xl rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform">
            Let&apos;s Code
          </Button>
        </Link>
      </div>
    </div>
  );
}
