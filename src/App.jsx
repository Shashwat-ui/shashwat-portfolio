import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(function () {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className=" w-full mx-auto h-screen px-12 ">
      <Header />
      <Hero />
    </div>
  );
}
