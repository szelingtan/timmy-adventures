import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      {//</AppSidebar>
      }
      <SidebarInset className="bg-cover bg-center bg-[url('/FrontPageMobile.png')] md:bg-[url('/FrontPage.png')]">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}