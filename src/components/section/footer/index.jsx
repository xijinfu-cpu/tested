import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="mt-8 flex flex-col  items-center">
        <p className="font-bold text-white text-sm">
        Terima kasih atas perhatian dan waktu Anda
        </p>
        <p className="font-bold text-white text-sm">Kami sangat menantikan pertemuan berikutnya.🤍</p>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-[10px] text-[#A3A1A1] mb-6">
          E-Invitation made with ♥ by{' '} {' '} 
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.digsy.my.id"
            
          >
            Digsy &

            
          </a>
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/mrys0"
            
          >
            &nbsp;Rewriter Muhammad Raykram
            
          </a>
        </p>
      </div>
    </div>
  );
}
