"use client";

import React, { useEffect, useState } from "react";

interface Song {
  title: string;
  url: string;
}

export default function ListeningSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs: Song[] = [
    {
      title: "Perfect - Ed Sheeran",
      url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    },
    {
      title: "Golden hour - JVKE",
      url: "https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn",
    },
    {
      title: "Monica - Anirudh Ravichander",
      url: "https://open.spotify.com/track/2t1pEpxPz91KldW7C0FyZv",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const safeIndex = Math.max(0, Math.min(currentSongIndex, songs.length - 1));

  return (
    <section
      className={`mb-12 transition-all duration-1000 delay-325 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-l font-medium mb-2 text-foreground">listening to</h2>

      <div className="hidden sm:flex sm:flex-row sm:gap-6">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-lg animate-spin">💿</span>
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-100 hover:text-gray-300 transition-colors"
            >
              {song.title}
            </a>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <div className="flex items-center gap-2">
          <span className="text-lg animate-spin">💿</span>
          <a
            href={songs[safeIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm text-gray-100 hover:text-gray-300 transition-colors"
          >
            {songs[safeIndex].title}
          </a>
        </div>
      </div>
    </section>
  );
}
