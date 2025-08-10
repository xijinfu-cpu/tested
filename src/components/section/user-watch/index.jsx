import React from 'react';

function getInviteeName() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('to');
  if (!raw) return 'Guest';                 // fallback kalau tidak ada ?to=
  return decodeURIComponent(raw.replace(/\+/g, ' '));
}

export default function UserWatch({ onClick }) {
  const invitee = getInviteeName();

  return (
    <div className="py-10 text-center space-y-28">
      <img
        className="mx-auto"
        src="images/NIKAHFIX.webp"
        width={'180px'}
        height={'48px'}
        alt="nikahfix"
      />
      <div>
        <p className="mb-10 text-lg">Who's Watching?</p>
        <div onClick={onClick} className="group cursor-pointer">
          <img
            className="mx-auto group-hover:scale-125"
            src="images/guest-icon.png"
            width={100}
            height={100}
            alt="nikahfix"
          />
          <p className="text-xl mt-4 group-hover:scale-100 group-hover:pt-5">
            {invitee}
          </p>
        </div>
      </div>
    </div>
  );
}
