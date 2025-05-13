import { HeroSection } from "@/components/herosection";

export default function Home() {
  return (
    <div className="">
      <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <div className="absolute inset-0 h-screen w-full hero-gradient opacity-75 Z-10 " />
      <div>
        {/* Navbar */}
        <HeroSection />
      </div>
    </div>
  );
}
