import Nav from "@/components/pages/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"


export async function CommonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
                <Nav/>
              {children}
              <Toaster />
          </ThemeProvider>
        </>
    )
}
