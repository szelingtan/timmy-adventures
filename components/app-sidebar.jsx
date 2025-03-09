"use client"

import * as React from "react"
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
  Trophy
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "Timmy Adventures",
      logo: Rocket,
      plan: "NUSC Impact Experience Project",
    }
    // new
    {
      name: "Team Explorers",
      logo: Map, // Using an icon you already have imported
      plan: "New Adventure Team",
    }
  ],
  navMain: [
    {
      title: "Activities",
      url: "/activities",
      icon: Map,
    },
    {
      title: "Groups",
      url: "/groups",
      icon: Users,
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
      title: "Feedback Form",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeQidImhy-AMvD1EA6pekT_myMdsx3hEqVUq2sr9Xu1U8Ak1A/viewform", 
      icon: BookOpen,
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
      </SidebarFooter> */}
    </Sidebar>)
  );
}
