// Navigation
function goHome() { window.location.href = "index.html"; }
function goProducts() { window.location.href = "products.html"; }
function goDiscord() { window.open("https://discord.gg/QSE4PpsWr7", "_blank"); }

// Cart Logic
let cartCount = 0;
function buy(item) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(item + " added to cart!");
}
function toggleCart() {
    alert("Items in cart: " + cartCount);
}

// Matrix Falling Letters
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const letters = "SANTUMXYZ";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffde37"; // Your Gold Color
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 33);
