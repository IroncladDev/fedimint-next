import { FedimintClientBuilder } from "fedimint-ts";

// Create a new fedimint client. If no federation id is provided, it will use the default federation id
export const createFedimintClient = async (
    federationId: string = process.env.DEFAULT_FEDERATION_ID as string,
) => {
    const clientBuilder = new FedimintClientBuilder()
        .setBaseUrl("http://" + (process.env.FEDIMINT_CLIENTD_ADDR as string))
        .setPassword(process.env.FEDIMINT_CLIENTD_PASSWORD as string)
        .setActiveFederationId(federationId);

    const client = clientBuilder.build();

    await client.useDefaultGateway();

    return client;
};
