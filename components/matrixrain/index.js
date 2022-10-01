import { useRef, useEffect } from "react";

const hugeFunc = () => {
  const canvas = document.getElementById("matrix-rain");
  const ctx = canvas.getContext("2d");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    draw(context) {
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length)
      );
      context.fillStyle = "#A239CA";
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 25;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    resize(width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
  }

  const effect = new Effect(canvas.width, canvas.height);
  let lastTime = 0;
  const fps = 30;
  const nextFrame = 1000 / fps;
  let timer = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = effect.fontSize + "px monospace";
      effect.symbols.forEach((symbol) => symbol.draw(ctx));
      timer = 0;
    } else {
      timer += deltaTime;
    }
    requestAnimationFrame(animate);
  };

  animate(4);

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
  });
};

const MatrixRain = () => {
  useEffect(() => {
    let cleanUp = true;
    hugeFunc();
    return () => {
      cleanUp = false;
    };
  }, []);

  return <canvas id="matrix-rain" style={styledCanvas}></canvas>;
};

export default MatrixRain;

const styledCanvas = {
  backgroundColor: "#0E0816",
};
