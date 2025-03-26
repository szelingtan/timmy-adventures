"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import PersonalityQuiz from "./PersonalityQuiz"; // Import the quiz component

function PersonalityTestOpen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold text-[#171717] mb-10 text-center">
        Discover your inner bear!
      </h1>
      <div className="mb-4">
        <img
          src="/PersonalityTest.png"
          alt="Personality Test"
          className="max-w-full md:max-w-3xl object-cover rounded"  // Adjusted image size for mobile responsiveness
        />
      </div>
      <button
        onClick={onStart}
        className="bg-[#171717] text-white px-6 py-2 rounded-md hover:drop-shadow-xl sm:w-auto"  // Button now expands on mobile
      >
        Start
      </button>
    </div>
  );
}

export function PersonalityTestPage() {
  const [quizStarted, setQuizStarted] = useState(false); // Track state

  return (
    <SidebarProvider>
      {//</AppSidebar>
      }
      <SidebarInset className="bg-[#f4f5f5] bg-cover bg-center w-full">  {/* Full width container for mobile */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
        <div className="px-6 pb-6">
          {quizStarted ? <PersonalityQuiz /> : <PersonalityTestOpen onStart={() => setQuizStarted(true)} />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default PersonalityTestPage;
