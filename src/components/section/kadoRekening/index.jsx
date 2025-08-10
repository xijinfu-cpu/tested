import React from 'react';

const KadoRekening = () => {
  const rekeningList = [
    { 
      id: 1, 
      bank: '',
      nomor: '123456789', 
      nama: 'Fatma', 
      logo: '/images/Logo_dana_blue.svg.png'
    },
    { 
      id: 2, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Slamet', 
      logo: '/images/2560px-Bank_Central_Asia.svg.png' 
    },
    { 
      id: 3, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Slamet', 
      logo: '/images/Bank_Mandiri_logo_2016.svg.png' 
    },
  ];

  return (
    <div className="p-2">
      {/* Judul konsisten dengan gaya font di bagian lain */}
      <h3 className="text-white text-lg font-bold mb-2">Send Gifts</h3>

      <p className="mt-2 text-sm text-white leading-relaxed">
        Terima kasih atas kehadiran dan doa restu Anda. bagi Kamu yang ingin memberikan hadiah untuk pernikahan kami, berikut adalah nomor rekening kami:
      </p>

      <div className="flex flex-col items-center gap-3 mt-5">
        {rekeningList.map((rekening) => (
          <div
            key={rekening.id}
            className="flex flex-col items-center border border-gray-300 rounded-lg p-3 w-80 text-center shadow-md bg-gray-500"
          >
            <img 
              src={rekening.logo} 
              alt={`${rekening.bank} Logo`} 
              className="w-[130px] h-[40px] mb-1"
            />
            <p className="text-base font-bold text-white">{rekening.nomor}</p>
            <p className="text-xs font-bold text-white">a.n {rekening.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KadoRekening;
