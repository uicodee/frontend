"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {useGetSessionsSessionAllGet} from "@/shared/api/session/session";


export default function Page() {
    const {data: sessions} = useGetSessionsSessionAllGet({query: {queryKey: ["sessions"]}})
    const data = sessions || []
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Sessions</CardTitle>
                    <CardDescription>
                        Your sessions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {data.map(session => (
                        <div key={session.id}>
                            <p className="text-sm">{session.ipAddress}</p>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Trip percent</CardTitle>
                    <CardDescription>
                        Used to identify your store in the marketplace.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Input type="number" placeholder="Trip percent"/>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </>
    )
}