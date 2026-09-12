// Replace this URL with your private Discord invite.
const DISCORD_INVITE = "https://discord.gg/b9RfqXhYSD";

function joinDiscord(event) {
  event.preventDefault();
  if (DISCORD_INVITE.includes("YOURINVITE")) {
    alert("Add your Discord invite link in script.js first.");
    return;
  }
  window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .event-card, .player").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = ".show{opacity:1!important;transform:translateY(0)!important}";
  document.head.appendChild(style);
});
