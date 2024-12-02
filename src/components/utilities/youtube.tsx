"use client"
import { useState } from "react";
import ReactYoutube, { YouTubeEvent } from "react-youtube";

interface YoutubeProps {
  youtube_id: string;
}

export default function Youtube({ youtube_id }: YoutubeProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <>
        <div className="fixed bottom-2 right-2">
          <button
            onClick={toggle}
            className="bg-white/10 backdrop-blur-md rounded-xl p-2 transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ReactYoutube
            videoId={youtube_id}
            onReady={(event: YouTubeEvent) => event.target.pauseVideo()}
            opts={option}
          />
        </div>
      </>
    );
  };
  const ButtonPlay = () => {
    return (
      <button
        onClick={toggle}
        className="bg-color-secondary text-color-primary hover:bg-color-accent p-2 rounded"
      >
        Play Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonPlay />;
}
