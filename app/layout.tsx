// import type { Metadata } from "next";
// import { Inter, Quicksand } from "next/font/google";
// import "./globals.css";

// import { GoogleOAuthProvider } from "@react-oauth/google";

// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const inter = Inter({ subsets: ["latin"] });
// const quickSand = Quicksand({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Twitter Clone",
//   description: "Build by Sakshi Suryawanshi",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const queryClient = new QueryClient();

//   return (
//     <html lang="en">
//       <QueryClientProvider client={queryClient}>
//         <GoogleOAuthProvider clientId="498105962305-ih2mnmfbtrrjpl3q6tr3jqs116sbvjg5.apps.googleusercontent.com">
//           <body className={inter.className}>{children}</body>
//           <ReactQueryDevtools />
//         </GoogleOAuthProvider>
//       </QueryClientProvider>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
