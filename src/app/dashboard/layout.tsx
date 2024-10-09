import { Header } from "@/entities"
import { Sidebar } from "@/entities"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex min-h-screen w-full flex-col bg-muted/40">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header />   
            {children}
        </div>
      </section>
    )
}