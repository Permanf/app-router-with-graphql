import Link from "next/link"
import {
  LayoutDashboard,
  LineChart,
  LogIn,
  Package,
  Package2,
  Section,
  Settings,
  Users2,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export function Sidebar(){
    return(
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Link
                href="/"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="/dashboard"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            </TooltipProvider>
          
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="/dashboard/products"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="/dashboard/category"
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Section className="h-5 w-5" />
                    <span className="sr-only">Category</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Category</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="/dashboard/users"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Users</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Users</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="/auth/login"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <LogIn className="h-5 w-5" />
                    <span className="sr-only">Login</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Login</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </nav>
        </aside>
    )
}