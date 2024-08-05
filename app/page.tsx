import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snappy",
  description: "Snappy - E-commerce solution for smart business",
};

export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />
      <Footer />
    </main>
  );
}
