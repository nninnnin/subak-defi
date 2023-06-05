import "./globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, atom } from "recoil";
import { Token } from "@/models";

import NavigationBar from "../components/NavigationBar";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

export const SelectedInputTokenState = atom<Token | null>({
  key: "SelectedInputTokenState",
  default: null,
});

export const SelectedOutputTokenState = atom<Token | null>({
  key: "SelectedOutputTokenState",
  default: null,
});

export default function App({ Component, pageProps }: AppProps) {
  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http(),
    }),
  });

  return (
    <WagmiConfig config={config}>
      <RecoilRoot>
        <NavigationBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </WagmiConfig>
  );
}
