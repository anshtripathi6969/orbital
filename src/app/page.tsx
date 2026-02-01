import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import Fleet from "@/components/sections/Fleet";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-black text-white relative">
      <Navbar />
      <Hero />
      <Destinations />
      <Fleet />
      <Experience />
      <Footer />
    </main>
  );
}
