"use client"

import loadFont from "next/font/local";


const comic_font = loadFont({
  src: '../fonts/comic_neue/ComicNeue-Bold.ttf',
  display: 'swap',
});

export default function Home(props: any) {
  return <main className="min-h-screen">
    <header className="h-20 sticky flex items-center px-10 mb-4 top-0 shadow-md backdrop-blur-sm">
      <a href="/" className={`text-3xl select-none font-mono ${comic_font.className}`}>Presta Hub</a>
    </header>
  </main>
}
