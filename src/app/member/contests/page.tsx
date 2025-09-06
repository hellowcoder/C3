
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContestsPage() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Contests</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Contest 1</CardTitle>
              <CardDescription>Div 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Problems Solved: 3/5</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Contest 2</CardTitle>
              <CardDescription>Div 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Problems Solved: 2/5</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
