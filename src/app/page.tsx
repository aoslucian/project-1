import CardList from "./components/cat-cards/CardList";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <Hero />
      <CardList />
    </main>
  );
}
