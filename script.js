body {
  margin: 0;
  background: black;
  color: gold;
  font-family: Arial;
  overflow: hidden;
}

/* MATRIX */
canvas {
  position: fixed;
  top: 0;
  left: 0;
}

/* NAV */
.nav {
  position: fixed;
  top: 20px;
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
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
}

/* TITLE */
h1 {
  font-size: 80px;
  text-shadow: 0 0 30px gold;
}

/* QUALITY FIRST (LEFT) */
.tagline {
  color: #FFD700;
  position: relative;
  left: -50px;
}

/* SHOP BUTTON */
.enter-btn {
  background: transparent;
  border: none;
  color: #FFD700;
  font-size: 16px;
  cursor: pointer;
}

.enter-btn:hover {
  text-shadow: 0 0 10px gold;
}

/* PRODUCTS PAGE */
.products-page {
  text-align: center;
  margin-top: 150px;
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
}
