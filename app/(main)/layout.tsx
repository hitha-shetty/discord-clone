import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ClientModalProvider } from "@/components/providers/client-modal-provider";

const MainLayout = async ({children} : {children : React.ReactNode}) => {
  return (
    <div className="h-full ">
        
        <div className="md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0 bg-blue-500">
            <NavigationSidebar />
        </div>
        <main className="md:pl-[72px] h-full">
            {children}
        </main>
        <ClientModalProvider />
    </div>
  )
}

export default MainLayout;