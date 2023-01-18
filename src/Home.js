import React from "react";
import Cards from "./components/cards";
import MiniNav from "./components/MiniNav";
import Navbar from "./components/Navbar";



const Home = () => {
  return (
    <div>
      <Navbar />
      <MiniNav />
      <div className="bg-[url('./assets/hero.jpg')] w-full h-64 bg-no-repeat bg-cover bg-center">
      </div>
      <Cards />
    </div>
  )
}

export default Home