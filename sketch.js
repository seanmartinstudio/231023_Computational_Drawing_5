let inc = 0.001;
let start1 = 1
let start2 = 0
let start3 = 0

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

//Pink
  noStroke()
  fill(255, 105, 180)
  let xoff1 = start1;
  for (let x = 0; x < height; x++) {
    let y = noise(xoff1) * height;
    circle(x, y, 400);
    xoff1 += inc;
  }
    
//Purple
  noStroke()
  fill(128, 80, 217)
  let xoff2 = start2;
  for (let y = 0; y < width; y++) {
    let x = noise(xoff2) * height;
    circle(x, y, 350);
    xoff2 += inc;
  }
  
//Blue 
  noStroke()
  fill(25, 55, 254)
  let xoff3 = start3;
  for (let y = 0; y < width; y++) {
    let x = noise(xoff3) * height;
    circle(x, y, 350);
    xoff3 += inc;
  }
  
  start1 -= 0.01  
  start2 += 0.01  
  start3 += 0.02
}