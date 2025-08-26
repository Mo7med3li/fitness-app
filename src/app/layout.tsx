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
        <Outlet />;
        <Toaster />
      </>
    </QueryClientProvider>
  );
};
export default RootLayout;
