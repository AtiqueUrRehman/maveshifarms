import Hero from "../components/hero";
import Catalogue from "../components/catalogus";

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
