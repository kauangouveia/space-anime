import { Container } from "@/components/Container";
import { List } from "@/components/List";

export default function Home() {
    return (
        <Container>
            <div className="h-[580px] bg-red-700 w-full flex justify-center items-center">
                <h1>Image Content</h1>
            </div>
            <List />
        </Container>

    )
}