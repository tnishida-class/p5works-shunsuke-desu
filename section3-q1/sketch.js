// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  textFont('Helvetica', 40);
  balloon("I love keyakizaka46", 50, 70);
  balloontail(50, 70)
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(30, 150, 30)
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h + p);
}

function balloontail(x, y){
  let h = textAscent() + textDescent();
  fill(30, 150, 30);
  triangle(x, y, x, y + h / 2, x - 30, y - 10);
}
