const startColor = 0;
const endColor = 255;
const duration = 5000 // 5 seconds

let startTime;

function brightenBackground() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // make sure we stop after 5 seconds

    const currentColor = Math.round(startColor + (endColor - startColor) * progress); // figure out what value to use?

    document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`;

    if (progress < 1) {
      requestAnimationFrame(brightenBackground);
    }
  }

  function startAnimation() {
    startTime = Date.now();
    requestAnimationFrame(brightenBackground);
  }

  startAnimation();