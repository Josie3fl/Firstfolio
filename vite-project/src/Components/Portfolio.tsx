import React from "react";
import PortfolioCard from "./PortfolioCards"; // Import PortfolioCard component
import "./FlipCard.css"; // Import CSS for flip card styling

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1f2e4a] text-white font-sans">
      {/* Header */}
      <header className="bg-[url('/header-bg.jpg')] bg-cover py-6 px-4 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:underline"></a>
          <a href="#portfolio" className="hover:underline"></a>
          <a href="#contact" className="hover:underline"></a>
          <a href="#resume" className="hover:underline text-red-400"></a>
        </nav>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example of a Portfolio Card */}
        <PortfolioCard
          screenshot="src/assests/littlebookkeeper.png"
          githubLink="https://github.com/Josie3fl/little-book-keeper-JB"
        />
        <PortfolioCard
          screenshot="src/assests/emp-screenshot.png"
          githubLink="https://github.com/Josie3fl/EMP-Racetrack"
        />
        {/* Add more PortfolioCards as needed */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-12">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1 font-bold">Name:</label>
            <input
              type="text"
              placeholder="Lernantino"
              className="w-full px-3 py-2 text-black rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Email address:</label>
            <input
              type="email"
              placeholder="lernantino@gmail.com"
              className="w-full px-3 py-2 text-black rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Message:</label>
            <textarea
              rows={5}
              placeholder="Hi, I am interested in having a website built"
              className="w-full px-3 py-2 text-black rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;