(() => {
  let hue = 0;

  const style = document.createElement("style");
  style.innerHTML = `
    html {
      transition: filter 0.1s linear;
    }
  `;
  document.head.appendChild(style);

  setInterval(() => {
    hue = (hue + 2) % 360;
    document.documentElement.style.filter = `hue-rotate(${hue}deg)`;
  }, 50);
})();
