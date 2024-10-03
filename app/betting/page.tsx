"use client";

import { styled } from "react-tailwind-variants";
import { Button } from "../components/button";
import { betEcash } from "./actions";

export default function Page() {
    const handlePlay = async () => {
        const notes = prompt("Ecash Notes");
        if (!notes) return;
        try {
            const res = await betEcash(notes);

            if (!res.success) throw new Error(res.message);

            await navigator.clipboard.writeText(res.data.notes);
            alert(
                `${
                    res.data.status === "half" ? "Bet halved." : "Bet doubled!"
                }. Ecash notes copied to clipboard: ${res.data.notes}`,
            );
        } catch (e) {
            alert(e);
        }
    };

    return (
        <Container>
            <Title>Ecash Betting</Title>
            <p>
                Click the Play button to play a round. Enter ecash notes to bet.
                You will receive an ecash token that&apos;s either half or
                double your bet.
            </p>
            <p>
                <strong>Quick tip</strong>: copy the ecash notes you intend to
                play to your clipboard before pressing the Play button.
            </p>
            <Button onClick={handlePlay}>Play</Button>
        </Container>
    );
}

const Container = styled("div", {
    base: "flex flex-col gap-8 p-4",
});

const Title = styled("h1", {
    base: "text-4xl font-bold",
});
