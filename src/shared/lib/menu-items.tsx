import {Car, LayoutDashboard, LogOut, MapPin, Palette, Settings2, SquareUser, TrafficCone, Users} from "lucide-react";

export const topMenuItems = [
    {
        title: "Dashboard",
        link: "/",
        icon: <LayoutDashboard className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Drivers",
        link: "/drivers",
        icon: <SquareUser className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Users",
        link: "/users",
        icon: <Users className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Trips",
        link: "/trips",
        icon: <TrafficCone className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Cars",
        link: "/data/cars",
        icon: <Car className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Locations",
        link: "/data/locations",
        icon: <MapPin className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Colors",
        link: "/data/colors",
        icon: <Palette className="size-5" strokeWidth={1.75}/>
    }
]
export const bottomMenuItems = [
    {
        title: "Settings",
        link: "/settings",
        icon: <Settings2 className="size-5" strokeWidth={1.75}/>
    },
    {
        title: "Logout",
        link: "/logout",
        icon: <LogOut className="size-5" strokeWidth={1.75}/>
    }
]