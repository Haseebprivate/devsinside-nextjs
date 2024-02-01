import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import Companies from "./components/Companies";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <Companies />
    </>
  );
}
