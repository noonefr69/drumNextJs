"use client";

import { useEffect, useState } from "react";

interface ButtonsProps {
  keyB: string;
  name: string;
  sound: string;
}

export default function Buttons({ keyB, name, sound }: ButtonsProps) {

  function playSound() {
    const audio = new Audio(sound);
    audio.play();
  }

  function handleToStart() {
    playSound();
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key.toUpperCase() === keyB.toUpperCase()) {
        playSound();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyB]);

  return (
    <div>
      <button
        onClick={handleToStart}
        className={`outline-3 shadow outline-transparent duration-200 hover:outline-[#ffe8d4] active:outline-[#ffe8d4] active:scale-90 text-[#ffe8d4] font-semibold text-4xl border-3 cursor-pointer w-50 h-30 rounded`}
      >
        {name} <h1 className="text-2xl mt-2">{keyB}</h1>
      </button>
    </div>
  );
}
