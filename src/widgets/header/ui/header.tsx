import {Button} from "@/shared/ui/button";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/shared/ui/sheet";
import {bottomMenuItems, topMenuItems} from "@/shared/lib/menu-items";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import {Menu as MenuCreator} from "./menu"

export const Header = () => {
    return (
        <header
            className="md:hidden sticky top-0 z-30 flex justify-between h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="sm:hidden">
                        <Menu className="h-5 w-5" strokeWidth={1.75}/>
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                        <MenuCreator items={topMenuItems}/>
                        <MenuCreator items={bottomMenuItems}/>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex items-center sm:hidden">
                <p className="uppercase font-bold text-xl text-primary">taxopark</p>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full sm:hidden"
                    >

                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="md:hidden">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}