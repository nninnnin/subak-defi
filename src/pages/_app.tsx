import { NextPage } from "next";
import type { AppProps } from "next/app";
import { RecoilRoot, atom } from "recoil";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

import { Token } from "@/models";
import "./globals.css";
import { ReactElement } from "react";

export const SelectedInputTokenState = atom<Token | null>({
  key: "SelectedInputTokenState",
  default: null,
});

export const SelectedOutputTokenState = atom<Token | null>({
  key: "SelectedOutputTokenState",
  default: null,
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http(),
    }),
  });

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <WagmiConfig config={config}>
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
    </WagmiConfig>
  );
}
