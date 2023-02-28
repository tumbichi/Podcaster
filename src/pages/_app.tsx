import type { AppProps } from "next/app";
import "@/Core/styles/globals.css";

import MainLayout from "@/Core/layouts/MainLayout";
import useRouteLoading from "@/Core/hooks/useRouteLoading";
import LoadingProvider from "@/Core/contexts/LoadingContext/LoadingProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LoadingProvider>
  );
}
