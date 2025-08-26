import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();
const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* App Content */}
      <>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Outlet />
          <Toaster />
        </ThemeProvider>
      </>
    </QueryClientProvider>
  );
};
export default RootLayout;
