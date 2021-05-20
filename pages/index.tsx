import Catalogue from "../components/catalogus";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <Hero />
        <Catalogue />
      </div>
    </div>
  );
}
