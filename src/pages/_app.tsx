import type { AppProps } from "next/app";
import "@/Core/styles/globals.css";

import MainLayout from "@/Core/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
