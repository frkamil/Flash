// Canvas Template

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

n = 0;
function draw() {
  n = n + 1;
  console.log(n);

  if (n < 200) {
    document.body.style.backgroundColor = "white";
  } else {
    //Change Background Color
    document.body.style.backgroundColor = randomRGB();
  }

  // Redraw
  requestAnimationFrame(draw);
}
