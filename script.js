// Matrix rain effect
function initMatrix() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Navigation functions
function goHome() {
    window.location.href = 'index.html';
}

function goProducts() {
    window.location.href = 'store.html';
}

function goDiscord() {
    window.open('https://discord.gg/YOUR_DISCORD_INVITE', '_blank'); // CHANGE THIS
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('santumCart')) || [];

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = total;
}

function buy(productName) {
    const existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name: productName, quantity: 1 });
    }
    localStorage.setItem('santumCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} added to cart! 🛒`);
}

function toggleCart() {
    const modal = document.querySelector('.cart-modal') || createCartModal();
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function createCartModal() {
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.innerHTML = `
        <div class="cart-content">
            <h2>🛒 Shopping Cart</h2>
            <div id="cart-items"></div>
            <p id="cart-total"></p>
            <button class="checkout-btn" onclick="checkout()">CHECKOUT</button>
            <button onclick="this.parentElement.parentElement.style.display='none'" 
                    style="margin-top:10px;background:#666;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:5px;">CLOSE</button>
        </div>
    `;
    document.body.appendChild(modal);
    renderCart();
    return modal;
}

function renderCart() {
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        totalEl.textContent = '';
        return;
    }
    
    itemsEl.innerHTML = cart.map(item => 
        `<div style="margin:15px 0;border-bottom:1px solid #333;padding-bottom:10px;">
            <strong>${item.name}</strong> x${item.quantity}
        </div>`
    ).join('');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalEl.textContent = `Total: ${totalItems} items`;
}

function checkout() {
    if (cart.length === 0) return;
    alert('Redirecting to Discord for payment... 💳');
    goDiscord();
    cart = [];
    localStorage.removeItem('santumCart');
    updateCartCount();
    document.querySelector('.cart-modal').style.display = 'none';
}

// Initialize everything
window.addEventListener('load', () => {
    initMatrix();
    updateCartCount();
    
    window.addEventListener('resize', () => {
        const canvas = document.getElementById('matrix');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
