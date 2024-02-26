import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import { TransitionProvider } from "./components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agency ",
  description: "O melhor site de Marketing Digital",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body className={inter.className}>
      
      <TransitionProvider >{children}</TransitionProvider>
      </body>
    </html>
  );
}
