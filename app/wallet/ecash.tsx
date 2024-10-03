import { FedimintWallet } from "@fedimint/core-web";
import { Container, H3 } from ".";
import { Button } from "../components/button";

// Wallet Ecash Widget
export default function WalletEcash({ wallet }: { wallet: FedimintWallet }) {
    const handleRedeemEcash = async () => {
        const notes = prompt("Ecash notes");

        if (!notes) return;

        await wallet.mint.redeemEcash(notes);
        alert("Ecash notes redeemed");
    };

    const handleSpendEcash = async () => {
        const amount = prompt("Amount (msats)");

        const res = await wallet.mint.spendNotes(Number(amount), 100, true, {});

        // I have no idea why this is necessary, but it doesn't work without it
        setTimeout(async () => {
            await navigator.clipboard.writeText(res.notes);
            alert("Ecash notes copied to clipboard: " + res.notes);
        }, 500);
    };

    return (
        <Container>
            <H3>Ecash</H3>
            <Button onClick={handleRedeemEcash}>Redeem Ecash notes</Button>
            <Button onClick={handleSpendEcash}>Spend Ecash notes</Button>
        </Container>
    );
}
