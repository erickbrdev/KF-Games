import Available from "../components/Available";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListConsole from "../components/ListConsole";
import ListGames from "../components/ListGames";
import News from "../components/News";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <Header />
      <Hero />

      <ListConsole />
      <Available />
      <ListGames />

      <News />
      <Footer />
    </main>
  );
}
