import type {Metadata} from "next";
import {GeistSans} from 'geist/font/sans';
import "./globals.css";
import {cn} from "@/shared/ui/utils";
import {AuthProvider, ReactQueryClientProvider, ThemeProvider} from "@/shared/providers";

export const metadata: Metadata = {
    title: {template: "%s | Taxopark", default: "Admin | Taxopark"},
    description: "Taxopark INC",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ReactQueryClientProvider>
            <html lang="en" className="h-full w-full" suppressHydrationWarning>
            <body className={cn(GeistSans.className, "h-full w-full")}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange={false}
            >
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
            </body>
            </html>
        </ReactQueryClientProvider>
    );
}
