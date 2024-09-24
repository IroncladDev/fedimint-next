"use server";

import { createFedimintClient } from "@/app/lib/fedimint";
import { InfoResponse } from "fedimint-ts";

// Join a new fedimint by invite code
export async function joinFedimint(invite: string): Promise<
    | {
          success: true;
          data: InfoResponse;
      }
    | { success: false; message: string }
> {
    try {
        const fedimint = await createFedimintClient();

        await fedimint.join(invite, false, true);

        return { success: true, data: await fedimint.info() };
    } catch (e) {
        return { success: false, message: (e as Error).message };
    }
}

// Redeem ecash notes to a specific fedimint
export async function redeemEcashNotes(
    fedimintId: string,
    notes: string,
): Promise<
    | { success: true; data: InfoResponse[string] }
    | { success: false; message: string }
> {
    try {
        const fedimint = await createFedimintClient(fedimintId);

        await fedimint.mint.reissue(notes);

        const info = await fedimint.info();

        return { success: true, data: info[fedimintId] };
    } catch (e) {
        return { success: false, message: (e as Error).message };
    }
}
