import Hero from "./components/Hero";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        heading="ShutterVerse: Capturing Dreams"
        message="Capturing Moments, Creating Memories - Your Story Through My Lens."
      />
    </main>
  );
}
