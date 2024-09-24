import { FedimintWallet } from "@fedimint/core-web";
import { useEffect, useState } from "react";
import { Container, H3 } from ".";

// Wallet Balance Widget
export default function WalletBalance({ wallet }: { wallet: FedimintWallet }) {
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = wallet.balance.subscribeBalance((balance) => {
            setBalance(balance);
        });

        return () => {
            unsubscribe();
        };
    }, [wallet]);

    return (
        <Container>
            <H3>Balance</H3>
            <p>{balance} msats</p>
        </Container>
    );
}
