import type { Metadata } from "next";
import { Navigation } from "./_components";
import { SideNavigation } from "./_components/SideNavigation";
import styles from "./App.module.css";

export const metadata: Metadata = {
  title: "Example app",
  description: "Should be my playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Navigation />
        <SideNavigation />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
