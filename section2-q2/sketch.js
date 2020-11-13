// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
        fill(255, 255, 255);
        rect(i * 10, j * 10, 10 , 10);
      }
      else{
        fill(130, 130, 130);
        rect(i * 10, j * 10, 10 , 10);
      }
    }
  }
  for(let m = 0; m < 8; m++){
    for(let n = 0; n < 8; n++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(n < 3){
        fill(255, 0, 0);
        ellipse(m * 10 + 5, n * 10 + 5, 8);
      }
      else if(n > 4){
        fill(0, 0, 0);
        ellipse(m * 10 + 5, n * 10 + 5, 8);
      }
    }
  }
  for(let a = 0; a < 8; a++){
    for(let b = 0; b < 8; b++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((a + b) % 2 == 0){
        fill(255, 255, 255);
        rect(a * 10, b * 10, 10 , 10);
      }
      else{
        noFill();
      }
    }
  }
}
