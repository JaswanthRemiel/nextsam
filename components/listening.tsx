"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Song {
  title: string;
  artist: string;
  url: string;
  albumCover: string;
}

export default function ListeningSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs: Song[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
      albumCover:
        "https://cdn-images.dzcdn.net/images/cover/007b5e41dae0dd99ade00f509db734d4/1900x1900-000000-80-0-0.jpg?w=300&h=300&fit=crop",
    },
    {
      title: "Golden Hour",
      artist: "JVKE",
      url: "https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn",
      albumCover:
        "https://cdn-images.dzcdn.net/images/cover/845eff477946539849c7291510d61daf/500x500-000000-80-0-0.jpg?w=300&h=300&fit=crop",
    },
    {
      title: "Monica",
      artist: "Anirudh Ravichander",
      url: "https://open.spotify.com/track/2t1pEpxPz91KldW7C0FyZv",
      albumCover:
        "https://cdn-images.dzcdn.net/images/cover/001bcf1a542eaa10f577c9ff0ab7ca85/500x500-000000-80-0-0.jpg?w=300&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsLoaded(true));
    const rotateInterval = setInterval(() => {
      setCurrentSongIndex((i) => (i + 1) % songs.length);
    }, 10000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(rotateInterval);
    };
  }, [songs.length]);

  const currentSong = songs[currentSongIndex % songs.length];

  return (
    <section
      className={`transition-all duration-1000 delay-325 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="mt-3">
        <a
          href={currentSong.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block w-fit"
        >
          <div className="text-gray-300 rounded-lg border border-gray-50 border-opacity-15 from-card/80 to-card/40   overflow-hidden flex h-12 w-48">
            <div className="relative w-12 h-12 align-middle bg-muted flex-shrink-0 overflow-hidden">
              <Image
                src={currentSong.albumCover}
                alt={`${currentSong.title} album cover`}
                fill
                className="object-cover  transition-transform duration-300"
              />
            </div>

            <div className="flex-1 px-3 py-2 flex flex-col justify-between">
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-xs truncate group-hover:text-green-400 transition-colors">
                  {currentSong.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {currentSong.artist}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
