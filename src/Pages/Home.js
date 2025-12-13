import React from "react";
import softwareDeveloperImage from "../assets/software-developer.jpg";

function Home() {
  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div className="text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-2">
          Hi<span role="img" aria-label="wave">👋</span>, I'm Yossi Shem Tov
        </h1>

        <h1 className="text-5xl md:text-7xl xl:text-8xl bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent font-extrabold pb-4">
          Software Engineer
        </h1>

      </div>

      <div className="relative mt-5 md:mt-0 md:w-1/2 flex justify-center items-center">
        <div
          style={{
            backgroundImage: `url(${softwareDeveloperImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "500px",  
            height: "400px",  
            borderRadius: "50% / 60%", 
          }}
          className="shadow-lg"
        />
      </div>
    </main>
  );
}

export default Home;
