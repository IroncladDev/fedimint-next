"use client";

import { FedimintWallet } from "@fedimint/core-web";
import { useEffect, useState } from "react";
import WalletLightning from "./lightning";
import WalletEcash from "./ecash";
import WalletBalance from "./balance";
import { styled } from "react-tailwind-variants";

export default function Wallet() {
    const [wallet, setWallet] = useState<FedimintWallet | null>();

    useEffect(() => {
        // Load the fedimint wallet
        async function loadWallet() {
            const wal = new FedimintWallet();

            wal.setLogLevel("debug");

            // Whether the wallet has successfully been opened
            const isOpen = await wal.open();

            // If not, join a federation by its invite code
            if (!isOpen) {
                await wal.joinFederation(
                    // Same one in .env
                    "fed11qgqzygrhwden5te0v9cxjtnzd96xxmmfdec8y6twvd5hqmr9wvhxuet59upqzg9jzp5vsn6mzt9ylhun70jy85aa0sn7sepdp4fw5tjdeehah0hfmufvlqem",
                );
            }

            setWallet(wal);
        }

        loadWallet();
    }, []);

    return (
        <WalletContainer>
            {wallet ? (
                <>
                    <H2>Fedimint Web Wallet</H2>
                    <WalletBalance wallet={wallet} />
                    <WalletLightning wallet={wallet} />
                    <WalletEcash wallet={wallet} />
                </>
            ) : (
                <H2>Loading...</H2>
            )}
        </WalletContainer>
    );
}

const WalletContainer = styled("div", {
    base: "min-w-[300px] shrink-0 flex flex-col gap-2 p-4",
});

const H2 = styled("h2", {
    base: "text-2xl font-bold",
});

export const Container = styled("div", {
    base: "flex flex-col gap-2 px-4 py-3 rounded-lg border border-gray-800",
});

export const H3 = styled("h3", {
    base: "font-semibold text-lg",
});
