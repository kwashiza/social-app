import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { clerk } from "@clerk/nextjs"

import leftsidebar from "@components/layout/leftsidebar";
import maincontainer from "@components/layout/maincontainer";
import topbar from "@components/layout/topbar";
import rightsidebar from "@components/layout/rightsidebar";


export const metadata = {
  title: "network",
  description: "social network  app",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <main className="flex flex row">
        <leftsidebar />
        <maincontainer>
        <topbar />
        {children}</maincontainer>
        <rightsidebar />
        </main>
        <bottombar />
        </body>
    </html>
    </ClerkProvider>
  );
}
