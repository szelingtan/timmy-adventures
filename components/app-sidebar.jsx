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
  // Use state for teams to ensure reactivity
  const [teams, setTeams] = React.useState([
    {
      name: "Timmy Adventures",
      logo: Rocket,
      plan: "NUSC Impact Experience Project",
    },
  ]);

  const navMain = [
    {
      title: "Activities",
      url: "/activities",
      icon: Map,
    },
    {
      title: "Prizes",
      url: "/prizes",
      icon: Trophy,
    },
    {
      title: "Personality Test",
      url: "/personalityTest",
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
