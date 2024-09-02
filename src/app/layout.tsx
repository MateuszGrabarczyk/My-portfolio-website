import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Created by Mateusz Grabarczyk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var darkMode = localStorage.getItem('darkMode');
                if (darkMode === 'true') {
                  document.documentElement.style.backgroundColor = '#111827';
                } else {
                  document.documentElement.style.backgroundColor = '#ffffff';
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
