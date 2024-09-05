
//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables

let bluex = 280;
let bluey = 600;
let dx = 4;
let dy = 0;
let a = 0.4;
let jumpSpeed = -12;
let n = 0


// let ArrowUpIsPressed = false;
// let ArrowDownIsPressed = false;
let ArrowRightIsPressed = false;
let ArrowLeftIsPressed = false;

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  n++

  console.log(n)

    if (n < 200) {

  //Set new positions for Blue Square

  // Horizonal Movement
  if (ArrowRightIsPressed) {
    bluex += dx;
    if (bluex > 160 && bluex < 400 && bluey > 210 && bluey < 290) {
      bluex = 160;
    }
  } else if (ArrowLeftIsPressed) {
    bluex -= dx;
    if (bluex > 160 && bluex < 400 && bluey > 210 && bluey < 290) {
      bluex = 400;
    }
  }

  // Vertical Movement
  dy += a; //Accelerate
  bluey += dy;

  // Reset blue if collided with wall

  if (bluex > 160 && bluex < 400 && bluey > 210 && bluey < 290) {
    if (dy <= 0) {
      bluey = 290;
      dy = 0;
    } else {
      bluey = 210;
      dy = 0;
    }
  }

  // Stop Blue moving off screen
  if (bluex > 560) {
    bluex = 560;
  } else if (bluex < 0) {
    bluex = 0;
  } else if (bluey < 0) {
    bluey = 0;
  } else if (bluey > 360) {
    bluey = 360;
    dy = 0;
  }

  //Draw a background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw Blue Square
  ctx.fillStyle = "blue";
  ctx.fillRect(bluex, bluey, 40, 40);

  //Draw Grey Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(200, 250, 200, 40);

} else {
//Flashing Lights
  document.body.style.backgroundColor = randomRGB();
  ctx.fillStyle = randomRGB();
  ctx.fillRect(0, 0, cnv.width, cnv.height);

}
  requestAnimationFrame(loop);
}

//Event Stuff
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    dy = jumpSpeed;
  } else if (event.code == "ArrowRight") {
    ArrowRightIsPressed = true;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftIsPressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "ArrowRight") {
    ArrowRightIsPressed = false;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftIsPressed = false;
  }
}