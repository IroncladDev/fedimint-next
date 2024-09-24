import { InfoResponse } from "fedimint-ts";
import { styled } from "react-tailwind-variants";
import { Button } from "../components/button";
import { redeemEcashNotes } from "./actions";
import { useState } from "react";

// An individual fedimint list item
export default function FedimintItem({
    data,
    id,
}: {
    data: InfoResponse[string];
    id: string;
}) {
    const [info, setInfo] = useState<InfoResponse[string]>(data);

    const handleRedeemEcashNotes = async () => {
        const notes = prompt("Notes");

        if (!notes) return;

        try {
            const res = await redeemEcashNotes(id, notes);

            if (!res.success) throw new Error(res.message);

            setInfo(res.data);
        } catch (e) {
            alert(e);
        }
    };

    return <Container>
        <Title>{info.meta.federation_name}</Title>
        <List>
            <li>ID: <Code>{id}</Code></li>
            <li>Balance (msats): <Code>{info.totalAmountMsat}</Code></li>
            <li>Network: <Code>{info.network}</Code></li>
        </List>
        <Button onClick={handleRedeemEcashNotes}>Redeem Ecash Notes</Button>
    </Container>;
}

const Container = styled("div", {
    base: "flex flex-col gap-2 p-4 rounded-lg border-2 border-gray-800",
});

const Title = styled("h2", {
    base: "text-lg font-bold",
});

const List = styled("ul", {
    base: "list-disc list-inside pl-4 break-all",
});

const Code = styled("code", {
    base: "font-mono text-sm rounded bg-gray-800 px-1 py-0.5",
});
