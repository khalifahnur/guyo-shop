import HomePage from "@/Pages/HomePage";
import FooterSection from "@/components/Footer/FooterSection";
import Navbar from "@/components/Header/Navbar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col -z-0 bg-[#ffff]">
      <Navbar />

      <div>
        <HomePage />
      </div>
      <FooterSection />
    </main>
  );
}
