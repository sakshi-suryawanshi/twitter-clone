"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId="498105962305-ih2mnmfbtrrjpl3q6tr3jqs116sbvjg5.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
