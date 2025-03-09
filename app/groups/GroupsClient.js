"use client";

import { useState, useEffect, useMemo } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import Image from "next/image";

function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function AnimatedArrow({ name, delay, repeatDelay, randomY }) {
  const duration = 10;
  const randomAmplitude = getRandomInRange(0, 250);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center gap-2 text-sm font-bold text-white"
      initial={{ x: 0, y: randomY, rotate: -45, opacity: 0.8 }}
      animate={{
        x: ["-200px", "900px", "1800px"],
        y: [randomY, randomY - randomAmplitude, randomY],
        rotate: [-30, 5, 30],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatDelay,
        delay,
      }}
    >
      <div className="flex flex-col items-center space-y-0">
        <span className="text-center text-sm text-[#7b2622] font-bold">{name}</span>
        <Image
          src="/CupidArrow.png"
          alt={`${name} animation`}
          width={112} // Adjust the width based on your requirements
          height={112} // Adjust the height based on your requirements
          className="object-contain rounded-lg"
        />
      </div>
    </motion.div>
  );
}

export default function GroupsClient({ teamsData }) {
  // Memoize the computed groupData to avoid recreating the array on every render:
  const groupData = useMemo(() => teamsData.map((item) => item.team), [teamsData]);
  const [animationData, setAnimationData] = useState([]);

  

  useEffect(() => {
    const data = groupData.map(() => ({
      randomY: getRandomInRange(0, 700),
      delay: getRandomInRange(0, 20),
      repeatDelay: getRandomInRange(3, 15),
    }));
    setAnimationData(data);
  }, [groupData]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[url('/GroupsBG.jpg')] bg-cover bg-center opacity-80">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 h-full">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
        <div className="relative h-full w-full overflow-hidden">
          {animationData.map((anim, index) => (
            <AnimatedArrow
              key={index}
              name={groupData[index]}
              delay={anim.delay}
              repeatDelay={anim.repeatDelay}
              randomY={anim.randomY}
            />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}