export const dynamic = 'force-dynamic';

import { getPrizesSheetData } from "@/app/actions/prizes-google-sheet.action";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import PrizesTable from "@/components/prizesTable";

export default async function PrizesPage() {
  // Fetch your data on the server
  const response = await getPrizesSheetData();
  const data = response.data.map((item) => ({
    prizes: item[0],
    winners: item.length > 1 ? item[1] : "",
  }));

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[url('/LeaderboardBG.jpg')] bg-cover bg-center">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
        <div className="px-6 pb-6">
          {/* Pass server-fetched data to the client component */}
          <PrizesTable data={data} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}