import React, { useEffect, useRef } from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';
import KadoRekening from '../kadoRekening';

export default function DetailInfo() {
  const base = import.meta.env.BASE_URL || '/';
  const backgroundMusicRef = useRef(null);

  useEffect(() => {
    const audioElement = backgroundMusicRef.current;
    if (!audioElement) return;

    const tryPlay = async () => {
      try {
        await audioElement.play();
      } catch (_) {
        // Autoplay kemungkinan diblokir; tunggu interaksi pengguna
      }
    };

    // Coba play saat mount
    tryPlay();

    // Fallback: play saat ada interaksi pertama
    const resumeOnInteract = async () => {
      try {
        await audioElement.play();
      } catch (_) {
        // abaikan
      } finally {
        window.removeEventListener('click', resumeOnInteract);
        window.removeEventListener('touchstart', resumeOnInteract);
        window.removeEventListener('keydown', resumeOnInteract);
      }
    };

    window.addEventListener('click', resumeOnInteract, { once: true });
    window.addEventListener('touchstart', resumeOnInteract, { once: true });
    window.addEventListener('keydown', resumeOnInteract, { once: true });

    return () => {
      window.removeEventListener('click', resumeOnInteract);
      window.removeEventListener('touchstart', resumeOnInteract);
      window.removeEventListener('keydown', resumeOnInteract);
    };
  }, []);
  return (
    <div className="space-y-5 pb-10">
      <audio
        ref={backgroundMusicRef}
        src={`${base}musik.mp3`}
        preload="auto"
        autoPlay
        loop
      />
      <video className="w-full" autoPlay muted loop playsInline>
        <source
          src={`${base}images/myvideo.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <TitleInfo />
      <BreakingNews />
      <Bridegroom />
      <LoveStory />
      <OurGallery />
      <WishSection />
      <KadoRekening/>
      <Footer />
    </div>
  );
}
