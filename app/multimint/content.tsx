"use client";

import { styled } from "react-tailwind-variants";
import { InfoResponse } from "fedimint-ts";
import { Button } from "../components/button";
import FedimintItem from "./fedimint-item";
import { useState } from "react";
import { joinFedimint } from "./actions";

// Multimint page
export default function MultimintContent({ info }: { info: InfoResponse }) {
    const [fedimints, setFedimints] = useState<InfoResponse>(info);

    const handleJoinFedimint = async () => {
        const invite = prompt("Invite Code");

        if (!invite) return;

        try {
            const res = await joinFedimint(invite);

            if (!res.success) throw new Error(res.message);

            setFedimints(res.data);
        } catch (e) {
            alert(e);
        }
    };

    return (
        <Container>
            <InfoContainer>
                <Title>Multimint</Title>
                <p>Fedimint Client Daemon connected to multiple fedimints</p>
                <Button onClick={handleJoinFedimint}>Join a Fedimint</Button>
            </InfoContainer>

            <FedimintsContainer>
                {Object.entries(fedimints).map(([id, data]) => (
                    <FedimintItem data={data} id={id} key={id} />
                ))}
            </FedimintsContainer>
        </Container>
    );
}

const FedimintsContainer = styled("div", {
    base: "flex flex-wrap gap-4 p-4 justify-center",
});

const InfoContainer = styled("div", {
    base: "flex flex-col gap-2",
});

const Container = styled("div", {
    base: "flex flex-col gap-8 p-4",
});

const Title = styled("h1", {
    base: "text-4xl font-bold",
});
