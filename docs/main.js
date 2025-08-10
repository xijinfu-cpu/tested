// Countdown target
const target = new Date('2025-10-10T09:00:00+07:00').getTime();
const dEl = document.getElementById('d');
const hEl = document.getElementById('h');
const mEl = document.getElementById('m');
const sEl = document.getElementById('s');

function tick() {
  const now = Date.now();
  let diff = Math.max(0, Math.floor((target - now) / 1000));
  const d = Math.floor(diff / 86400); diff -= d * 86400;
  const h = Math.floor(diff / 3600); diff -= h * 3600;
  const m = Math.floor(diff / 60); const s = diff - m * 60;
  dEl.textContent = d; hEl.textContent = h; mEl.textContent = m; sEl.textContent = s;
}
tick();
setInterval(tick, 1000);

// WhatsApp form
document.getElementById('wishForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || name.length < 3 || !message) return;
  const text = `Untuk: ${name}\n\n${message}`;
  const url = `https://wa.me/62895404778800?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});


