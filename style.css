@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #2e2800 0%, #000000 80%);
    color: white;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

#matrix {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.45;
    pointer-events: none;
}

/* Flashing Watermark */
.watermark {
    position: fixed;
    top: 20px;
    right: 25px;
    font-size: 11px;
    letter-spacing: 3px;
    color: #ffde37;
    font-weight: bold;
    z-index: 100;
    animation: flashWatermark 3s infinite;
}

@keyframes flashWatermark {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.9; text-shadow: 0 0 10px #ffde37; }
}

/* Nav Bar */
.nav {
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    z-index: 10;
}

.nav span {
    cursor: pointer;
    margin: 0 15px;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #888;
    transition: 0.3s;
}

.nav span:hover { color: white; }
.nav .discord-link { color: #5865F2; font-weight: bold; }

/* Content Styles */
.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
}

.gold-glow {
    font-size: clamp(3rem, 10vw, 8.5rem);
    color: #ffde37;
    letter-spacing: 12px;
    text-shadow: 0 0 20px rgba(255, 222, 55, 0.6), 0 0 50px rgba(255, 222, 55, 0.3);
}

.gold-glow.small { font-size: 3.5rem; margin-bottom: 50px; }

.tagline {
    letter-spacing: 8px;
    color: #ffde37;
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 30px;
}

.discord-btn {
    background: #5865F2;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

/* Store Cards */
.store-container { padding-top: 150px; text-align: center; }
.product-grid { display: flex; justify-content: center; gap: 25px; flex-wrap: wrap; }
.product-card {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 222, 55, 0.3);
    backdrop-filter: blur(10px);
    padding: 40px;
    width: 240px;
    border-radius: 10px;
    transition: 0.3s;
}
.product-card:hover { border-color: #ffde37; transform: translateY(-5px); }
.price { font-size: 2rem; color: #ffde37; margin: 15px 0; }
.buy-btn {
    background: #ffde37;
    border: none;
    color: black;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}

/* Floating Cart */
.cart-floating-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #ffde37;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 0 15px rgba(255, 222, 55, 0.4);
}

.cart-count {
    position: absolute;
    top: 0;
    right: 0;
    background: #ffde37;
    color: black;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
