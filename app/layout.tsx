import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Build by Sakshi Suryawanshi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId="498105962305-ih2mnmfbtrrjpl3q6tr3jqs116sbvjg5.apps.googleusercontent.com">
        <body className={inter.className}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}
