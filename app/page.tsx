import Link from "next/link";
import { styled } from "react-tailwind-variants";

export default function Home() {
    return (
        <Container>
            <Title>Fedimint 🤝 Next.js Examples</Title>
            <List>
                <Item>
                    <Link href="/betting">Betting</Link>
                </Item>
                <Item>
                    <Link href="/.well-known/lnurlp/lightning">Lightning Address</Link>
                </Item>
            </List>
        </Container>
    );
}

const Container = styled("div", {
    base: "flex flex-col gap-2 p-4 grow",
});

const List = styled("ul", {
    base: "list-disc list-inside pl-8",
});

const Item = styled("li", {
    base: "text-lg underline",
});

const Title = styled("h1", {
    base: "text-4xl font-bold",
});
