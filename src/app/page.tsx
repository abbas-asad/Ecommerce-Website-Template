import Hero from "./components/hero";
import Furniturehighlights from "./components/furniturehighlights";
import Productcards from "./components/productcards";
import Newarrivalssection from "./components/newarrivalssection";
import Blogsection from "./components/blogsection";
import Instagramsection from "./components/instagramsection";

export default function Home() {
  return (
    <main className="bg-[#FFF9F3]">
      <Hero />
      <Furniturehighlights />
      <Productcards headingName="Top Picks For You" para="Discover the perfect blend of style and comfort with our exceptional range of premium furniture." limit={4} />
      <Newarrivalssection />
      <Blogsection />
      <Instagramsection />
    </main>
  )
}

