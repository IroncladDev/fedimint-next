import { createFedimintClient } from "./app/lib/fedimint";

async function main() {
    const fedimint = await createFedimintClient();

    const fedimints = await fedimint.info();

    for(const [id, info] of Object.entries(fedimints)) {
        if(info.totalAmountMsat === 0) continue;

        const { notes } = await fedimint.mint.spend(
            {
                amountMsat: info.totalAmountMsat,
                allowOverpay: true,
                timeout: 10000,
                includeInvite: true,
            },
            id
        );

        console.log(info.meta.federation_name)
        console.log(notes)
        console.log("\n")
    };
}

main();
