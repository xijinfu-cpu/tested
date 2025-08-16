import React from 'react';

const LoveItem = ({ imageUrl, title, duration, description }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            className="w-full rounded-md object-cover"
            height={100}
            style={{
              maxHeight: '100px',
            }}
            src={imageUrl}
            alt="dummy"
          />
        </div>
        <div className="flex justify-center">
          <div className="my-auto">
            <p className="text-white mb-2 tracking-tighter">{title}</p>
            <p className="text-xs text-[#A3A1A1]">{duration}</p>
          </div>
        </div>
      </div>
      <p className="text-[#A3A1A1] text-xs mt-2">{description}</p>
    </div>
  );
};

export default function LoveStory() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Love Story
      </h2>
      <div className="space-y-4">
        <LoveItem
          imageUrl={`${base}images/story1.jpeg`}
          title="Episode 1: Perjumpaan Tak Terduga"
          duration="27m 14s"
          description="Kisah kami dimulai dari sebuah pertemuan yang tak direncanakan, namun membawa dua hati bertemu dalam perjalanan yang tak terduga."
        />
        <LoveItem
          imageUrl={`${base}images/story2.jpg`}
          title="Episode 2: Cinta yang Tumbuh"
          duration="32m 10s"
          description="Seiring waktu, cinta kami berkembang, menguat, dan saling melengkapi dalam perjalanan yang penuh makna."
        />
        <LoveItem
          imageUrl={`${base}images/story3.jpeg`}
          title="Episode 3: Hari yang Sempurna"
          duration="22m 10s"
          description="Kini, kami siap melangkah ke babak baru dalam hidup, berbagi kebahagiaan dan cinta dalam hari yang penuh berkah."
        />
      </div>
    </div>
  );
}
