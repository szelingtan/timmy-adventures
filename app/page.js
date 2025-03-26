"use client";

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react";

function SMGScenariosIntro({ onStart }) {
  return (
    <div className="bg-[#f4f5f5] bg-cover bg-center flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold text-[#171717] mb-10 text-center">
        Timmy Adventures!
      </h1>
      <h2 className="text-xl text-[#171717] mb-10 text-center">
        Let us explore a day in the life of Timmy and his fantastical adventures!
      </h2>
      <button
        onClick={() => location.href='./game'}
        className="bg-[#171717] text-white px-6 py-2 rounded-md hover:drop-shadow-xl sm:w-auto"  // Button now expands on mobile
      >
        Start
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <SidebarProvider>
      {//</AppSidebar>
      }
      <SidebarInset className="bg-cover bg-center bg-[url('/FrontPageMobile.png')] md:bg-[url('/FrontPage.png')]">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 bg-white" />
        </div>
        <div className="px-6 pb-6">
          <SMGScenariosIntro/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}