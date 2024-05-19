import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/ui/card";
import {ReactNode} from "react";
import {Skeleton} from "@/shared/ui/skeleton";

interface DataCardProps {
    title: string;
    children: ReactNode;
    button?: ReactNode;
    isLoading: boolean
}

export const DataCard = ({title, children, button, isLoading}: DataCardProps) => {
    return (
        <Card className="flex-grow min-h-full md:h-full ">
            <div className="flex items-center justify-between">
                <CardHeader className="px-6 pt-6 pb-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>The list of all available cars</CardDescription>
                </CardHeader>
                <div className="flex px-6 pt-6 pb-1">{button}</div>
            </div>
            <CardContent className="grid gap-8">
                {isLoading ? (
                    <div className="flex flex-col mt-4 space-y-4">
                        <div className="flex gap-x-2">
                            <Skeleton className="h-8 w-full md:w-[250px]"/>
                            <Skeleton className="h-8 w-[100px]"/>
                        </div>
                        <div className="flex">
                            <Skeleton className="w-full h-[200px] rounded-md"/>
                        </div>
                    </div>
                ) : children}
            </CardContent>
        </Card>
    )
}