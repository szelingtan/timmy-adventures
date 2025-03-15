import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ActivityCards from "@/app/activities/ActivityCards";

// Because this is now a Server Component, we can fetch data directly here
export default function ActivityPage() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[url('/ActivityBGMobile.png')] md:bg-[url('/ActivityBG.png')] bg-cover bg-center mt-5 md:mt-0">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
        <div className="px-6 pb-6 pt--3">
          <ActivityCards />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}