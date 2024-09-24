import { createFedimintClient } from "../lib/fedimint";
import MultimintContent from "./content";

// React Server Component to initially load all the fedimint info
export default async function Page() {
    const fedimint = await createFedimintClient();

    const info = await fedimint.info();

    return <MultimintContent info={info} />;
}
