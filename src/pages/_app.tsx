import "./globals.css";
import type { AppProps } from "next/app";

import NavigationBar from "../components/NavigationBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
