import { FedimintClientBuilder } from "fedimint-ts";

/**
 * Create a new client to interact with the Fedimint Clientd
 *
 * - Needs a default federation invite code if not joined to any fedimints
 * - Uses URL + password auth (from environment variables)
 * - Needs a default federation ID to be passed initially
 *
 * Uses the default (first) lightning gateway after being built
 */

export const createFedimintClient = async (
    // Defaults to the federation ID provided in environment variables
    // Can be overridden by passing a different federation ID
    federationId: string = process.env.DEFAULT_FEDERATION_ID as string
) => {
    const clientBuilder = new FedimintClientBuilder()
        .setBaseUrl("http://" + (process.env.FEDIMINT_CLIENTD_ADDR as string))
        .setPassword(process.env.FEDIMINT_CLIENTD_PASSWORD as string)
        .setActiveFederationId(federationId);

    const client = clientBuilder.build();

    await client.useDefaultGateway();

    return client;
};
