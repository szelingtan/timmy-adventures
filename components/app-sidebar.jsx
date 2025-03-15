"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Users,
  Rocket,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Trophy,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  // ignore this 
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    setTeams([
      {
        name: "Timmy Adventures",
        logo: Rocket,
        plan: "NUSC Impact Experience Project",
      }
    ]);
  }, []); // Updates once when the component mounts

  const navMain = [
    {
      title: "How to Play",
      url: "/how_to_play",
      icon: Map,
    },
    {
      title: "Reflections",
      url: "/reflections",
      icon: Rocket,
    },
    {
      title: "Game",
      url: "/game",
      icon: Bot,
    },
    {
      title: "SMG Feedback Form",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeQidImhy-AMvD1EA6pekT_myMdsx3hEqVUq2sr9Xu1U8Ak1A/viewform",
      icon: BookOpen,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
