'use client';
import { useState } from 'react';
import Image from 'next/image';

export function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-2xl shadow-md">
      <Image
        src={images[current]}
        alt={`Slide ${current + 1}`}
        width={800}
        height={400}
        className="w-full h-[400px] object-cover"
      />
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">
        ←
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">
        →
      </button>
    </div>
  );
}
