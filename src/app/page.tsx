'use client';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import TextType from "@/components/ui/text-type";
import Lightning from "@/components/Lightning";

export default function Home() {
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>
      <div className="inline-block z-10">
        <SplitText
          tag="h1"
          text="Competitive Coding Club"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-green-400"
          delay={80}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, scale: 0.8, y: 50 }}
          to={{ opacity: 1, scale: 1, y: 0 }}
          textAlign="center"
          onLetterAnimationComplete={() => setTitleAnimationComplete(true)}
        />
        <div className="w-full flex justify-end mt-4">
            {titleAnimationComplete && (
                <TextType
                  text="cout&lt;&lt;&quot;Here Coding Competes&quot;&lt;&lt;'&#92;n';"
                  className="text-xl sm:text-2xl md:text-3xl text-red-600 font-mono text-red-600"
                  typingSpeed={75}
                  showCursor={true}
                  cursorCharacter="_"
                  loop={true}
                />
            )}
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <Link href="/general" passHref>
          <Button className="px-8 py-4 text-xl rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform">
            Let&apos;s Code
          </Button>
        </Link>
      </div>
    </div>
  );
}