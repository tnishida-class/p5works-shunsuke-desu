let d, x, y, va, vb, a, b, cx, cy, r, angle;
function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  const blue = color(0, 48, 112);
  background(255);

  d = height / 13; // 縞1本の太さ
  cx = 0;
  cy = 0;
  angle = 0;
  a = 0
  b = 0
  va = 2;
  vb = 2;


  for(let i = 0; i < 14; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
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

  noStroke();

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
  rect(a, b, size * 10 / 7, size);
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

function draw(){
   star(cx, cy, r, angle);
   cx += va;
   cy += vb;

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
