import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import "@fontsource/iosevka";
import { Analytics } from "@vercel/analytics/react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
