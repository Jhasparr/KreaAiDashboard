import Image from "next/image";

import Carousel from "./Components/Global/Carousel";
import SecondaryHero from "./Components/Global/SecondaryHero";
import Navbar from "./Components/Global/Navbar";

export default function Home() {
  return (
    <main className="md:px-8 px-2">
      <Carousel />
      <SecondaryHero />
    </main>
  );
}
