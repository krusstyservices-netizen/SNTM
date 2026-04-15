// NAVIGATION
function showProducts() {
  document.getElementById("home").style.display = "none";
  document.getElementById("products").style.display = "block";
}

function goHome() {
  document.getElementById("products").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function goDiscord() {
  window.open("https://discord.gg/YOURINVITE");
}

// BUY BUTTON
function buy() {
  alert("Connect Stripe here");
}

// MATRIX BACKGROUND
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "SANTUMXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "gold";
  ctx.font = fontSize + "px monospace";

  for(let i=0;i<drops.length;i++){
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random()>0.975){
      drops[i]=0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);
