import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white my-4">
      <h2 className="text-xl font-bold">Hitung Mundur Menuju Hari Pernikahan</h2>
      <div className="flex justify-center gap-4 mt-2 text-lg font-semibold">
        <span>{timeLeft.days || 0} Hari</span>
        <span>{timeLeft.hours || 0} Jam</span>
        <span>{timeLeft.minutes || 0} Menit</span>
        <span>{timeLeft.seconds || 0} Detik</span>
      </div>
    </div>
  );
}
