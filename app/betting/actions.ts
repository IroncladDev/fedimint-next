"use server";

import { createFedimintClient } from "../lib/fedimint";

// Bet on doubling or halving an ecash note.
// Throws an error if the note is not owned by the current fedimint
// If the fedimint has an insufficient balance to double the note, it will return half the note
// Otherwise, rolls a 50% chance to return either a doubled or halved ecash note
export async function betEcash(
    notes: string,
): Promise<
    | { success: true; data: { status: "double" | "half"; notes: string } }
    | { success: false; message: string }
> {
    try {
        const fedimint = await createFedimintClient();

        const federationIds = await fedimint.federationIds();
        const decoded = await fedimint.mint.decodeNotes(notes);
        const currentFederationId = federationIds.federationIds.find((f) =>
            f.startsWith(decoded.notesJson.federation_id_prefix),
        );

        if (!currentFederationId) {
            throw new Error("Not joined to this fedimint");
        }

        const info = await fedimint.info();
        const currentFedimint = info[currentFederationId];

        const { amountMsat } = await fedimint.mint.reissue(notes);

        let returnAmount = Math.floor(amountMsat / 2);
        const chance = Math.random();

        if (currentFedimint.totalAmountMsat > amountMsat * 2 && chance < 0.5) {
            returnAmount = amountMsat * 2;
        }

        const newNotes = await fedimint.mint.spend({
            amountMsat: returnAmount,
            allowOverpay: true,
            timeout: 10000,
            includeInvite: false,
        });

        return {
            success: true,
            data: {
                status: returnAmount > amountMsat ? "double" : "half",
                notes: newNotes.notes,
            },
        };
    } catch (e) {
        return { success: false, message: (e as Error).message };
    }
}
