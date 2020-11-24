// 最終課題を制作しよう
let d, x, y, vx, vy, cx, cy, r, angle, t, w, h;
function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  const blue = color(0, 48, 112);
  background(255);

  d = height / 13;
  angle = 0;
  x = 20;
  y = 20;
  vx = 2;
  vy = 2;
  w = textWidth(t);
  h = textAscent() + textDescent();
  p = 2;


  for(let i = 0; i < 14; i++){
    if(i % 2 == 0){
      fill(230, 0, 18);
      rect(0, i * d, width, (i + 1) * d);
    }
    else{
      fill(255);
      rect(0, i * d, width, (i + 1) * d);
    }
  }

  fill(blue);
  seijouki();

 fill(0);
  textFont('Helvetica', 150);
  balloon("U S A", 50, 70);


  noStroke();
  fill(255);
  for(let m = 0; m < 11; m++){
    for(let n = 0; n < 9; n++){
      if((m + n) % 2 == 0){
        fill(255);
        star(m * d * 7 * 10 / 7 / 11 + 10, n * d * 7 / 9 + 10, 10, 0);

      }
      else{
        noFill();
      }
    }
  }
}

function seijouki(){
  let size = d * 7;
  rect(0, 0, size * 10 / 7, size);
  fill(255);
  star(cx, cy, r, angle);
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function balloon(t, x, y){
  fill(0);
  text(t, x + p, y + h + p);
}

function draw(){
 setup();
 text(t, x + p, y + h + p);
  x += vx;
  y += vy;


  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
