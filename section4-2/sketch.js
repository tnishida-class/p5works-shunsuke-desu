// テキスト「アニメーション」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vxMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}


function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  x += vx;
  y += vy;
  vx += g;
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vx = constrain(vx, -vxMax, vxMax);
　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
