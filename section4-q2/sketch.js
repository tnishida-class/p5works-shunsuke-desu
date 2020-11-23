// テキスト「アニメーション」
let x, y, vx, vy, cx, cy, r, angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 5;
  vy = 2;
  cx = 10;
  cy = 10;
  r = 10;
  angle = PI
}

function draw(){
background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
 star(cx, cy, r, angle);
 cx += vx;
 cy += vy;
 angle += PI * 1 / 30;

  // 端の処理パターン (1) 反対側から出てくる
  if(cx > width){ cx = 0; }
  else if(cx < 0){ cx = width; }
  if(cy > height){ cy = 0; }
  if(cy < 0){ cy = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  noStroke();
  fill(250, 250, 0);
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
