import { FedimintWallet } from "@fedimint/core-web";
import { Button } from "../components/button";
import { Container, H3 } from ".";

// Wallet Lightning Widget
export default function WalletLightning({
    wallet,
}: {
    wallet: FedimintWallet;
}) {
    const handleCreateInvoice = async () => {
        const amount = prompt("Amount (msats)");
        if (!amount) return;

        const { invoice } = await wallet.lightning.createInvoice(
            Number(amount),
            ""
        );

        await navigator.clipboard.writeText(invoice);
        alert("Invoice copied to clipboard: " + invoice);
    };

    const handlePayInvoice = async () => {
        const invoice = prompt("Lighting Invoice");

        if (!invoice) return;

        await wallet.lightning.payInvoice(invoice);
        alert("Invoice paid");
    };

    return (
        <Container>
            <H3>Lightning</H3>
            <Button onClick={handleCreateInvoice}>Create Invoice</Button>
            <Button onClick={handlePayInvoice}>Pay Invoice</Button>
        </Container>
    );
}
