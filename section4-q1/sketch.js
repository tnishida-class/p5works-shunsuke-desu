// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count, cycle, size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 150;
  size = 20;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle
  if(count < 75){
    size = count + 20
  }
  else{
    size = 170 - count;
  }
  ellipse(width / 2, height / 2, size);

}
