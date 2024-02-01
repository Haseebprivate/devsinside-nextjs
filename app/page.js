import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    </>
  );
}
