import React from "react";

interface PortfolioCardProps {
  screenshot: string;
  githubLink: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ screenshot, githubLink }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={screenshot}
            alt="Project Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flip-card-back flex justify-center items-center bg-[#1f2e4a]">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-xl hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
