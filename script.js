body {
  margin: 0;
  background: black;
  color: gold;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

/* MATRIX */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* ✅ FIX: keeps background behind everything */
}

/* NAV */
.nav {
  position: fixed;
  top: 20px;
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
  font-size: 14px;
  z-index: 10; /* ✅ FIX: stays above canvas */
}

.nav span {
  cursor: pointer;
  transition: 0.3s;
}

.nav span:hover {
  color: #FFD700;
  text-shadow: 0 0 10px gold;
}

/* CENTER */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* ✅ FIX: centers text */
}

/* TITLE */
h1 {
  font-size: 80px;
  text-shadow: 0 0 30px gold;
  margin-bottom: 10px;
}

/* QUALITY FIRST (LEFT BUT CLEAN) */
.tagline {
  color: #FFD700;
  margin-left: -40px; /* ✅ better than position:left */
}

/* SHOP BUTTON */
.enter-btn {
  background: transparent;
  border: none;
  color: #FFD700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

.enter-btn:hover {
  text-shadow: 0 0 10px gold;
}

/* PRODUCTS PAGE */
.products-page {
  text-align: center;
  margin-top: 150px;
  z-index: 5;
}

.product {
  margin: 20px;
}

/* WATERMARK */
.watermark {
  position: fixed;
  top: 10px;
  right: 15px;
  color: rgba(255,215,0,0.25);
  font-size: 12px;
  letter-spacing: 3px;
  pointer-events: none;
  z-index: 10;
}
