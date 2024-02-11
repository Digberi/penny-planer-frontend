import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@lib/utils";
import { SandwichProvider } from "@components/providers/sandwich";
import { Navbar } from "@components/navbar";
import { languages } from "@i18n/settings";
import { dir } from "i18next";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps  {
  params: {
    lng: string;
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: React.PropsWithChildren<RootLayoutProps>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
      >
        <SandwichProvider>
          <div>
            <Navbar lng={lng}/>
            {children}
          </div>
        </SandwichProvider>
      </body>
    </html>
  );
}