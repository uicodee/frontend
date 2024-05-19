import Link from "next/link";
import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <nav
                    className="grid gap-4 text-sm text-muted-foreground">
                    <Link href="/settings" className="font-semibold text-primary">
                        General
                    </Link>
                    <Link href="/settings/security">Security</Link>
                    {/*<Link href="#">Integrations</Link>*/}
                    {/*<Link href="#">Support</Link>*/}
                    {/*<Link href="#">Organizations</Link>*/}
                    {/*<Link href="#">Advanced</Link>*/}
                </nav>
                <div className="grid gap-6">{children}</div>
            </div>
        </main>
    )
}