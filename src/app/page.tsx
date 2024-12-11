import Hero from "./components/hero";
import Sidetablesection from "./components/sidetablesection";
import Newarrivalssection from "./components/newarrivalssection";
import Blogsection from "./components/blogsection";
import Instagramsection from "./components/instagramsection";
import Productsshowcase from "./components/productsshowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F3]">
      <Hero />
      <Sidetablesection />
      <Productsshowcase headingName="Top Picks For You" para="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights." moreButton="View More" />
      <Newarrivalssection />
      <Blogsection />
      <Instagramsection />
    </main>
  )
}

