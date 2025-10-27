import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/layout/NavBar";

// 


export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});



export const metadata: Metadata = {
  title: "R-V49X | Rohit Verma — Developer Portfolio",
  description:
    "R-V49X is the futuristic developer portfolio of Rohit Verma — a full-stack engineer skilled in web, Android, and software development. Explore innovative projects, creative designs, and tech experiments built with Next.js, React, and Three.js.",
  keywords: [
    "Rohit Verma",
    "R-V49X",
    "Rohit Verma Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "3D Portfolio",
    "Web Developer India",
    "Sci-Fi Portfolio",
  ],
  authors: [{ name: "Rohit Verma", url: "https://github.com/rohit637869" }],
  creator: "Rohit Verma",
  publisher: "R-V49X",
  openGraph: {
    title: "R-V49X — The Futuristic Developer Portfolio of Rohit Verma",
    description:
      "Explore the sci-fi themed developer space of Rohit Verma. Showcasing projects, skills, and creative experiments built using Next.js, React, and cutting-edge technologies.",
    url: "https://rv49x.dev",
    siteName: "R-V49X",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "R-V49X — Rohit Verma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://rv49x.dev"),
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // ${geistSans.variable} ${geistMono.variable} antialiased
        className={`  scroll-smooth ${inter.variable} ${orbitron.variable} font-sans se` } style={{scrollBehavior:"smooth"}}
      >
        
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
