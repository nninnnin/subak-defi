import "./globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, atom } from "recoil";
import { Token } from "@/models";

import NavigationBar from "../components/NavigationBar";

export const SelectedInputTokenState = atom<Token | null>({
  key: "SelectedInputTokenState",
  default: null,
});

export const SelectedOutputTokenState = atom<Token | null>({
  key: "SelectedOutputTokenState",
  default: null,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NavigationBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
