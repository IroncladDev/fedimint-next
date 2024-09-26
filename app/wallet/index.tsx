"use client";

import { styled } from "react-tailwind-variants";

// Fedimint Web Wallet
export default function Wallet() {
    return (
        <WalletContainer>
            <H2>Fedimint Wallet</H2>
        </WalletContainer>
    );
}

const WalletContainer = styled("div", {
    base: "min-w-[300px] shrink-0 flex flex-col gap-2 p-4",
});

const H2 = styled("h2", {
    base: "text-2xl font-bold",
});
