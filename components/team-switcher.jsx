"use client"

import * as React from "react"
import Link from "next/link" // Import Link from Next.js

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    // Wrap SidebarMenuButton with Next.js Link
    <Link href="/" passHref>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
        <div
          className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
        >
          <img
            src="/logo.png" // Use the passed image or fallback to activeTeam.image
            alt="logo"
            className="size-8 object-contain rounded-lg"
          />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            Timmy Adventues
          </span>
          <span className="truncate text-xs">NUSC Impact Experience Project</span>
        </div>
      </SidebarMenuButton>
    </Link>
  );
}
