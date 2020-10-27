// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill(i % 2 == 1 && j % 2 == 1 || i % 2 == 0 && j % 2 == 0 ?  255 : 150);
      console.log(i, j);
      rect(i * 10, j * 10, 10 , 10);
    }
  }
  for(let k = 0; k < 8; k++){
    for(let l = 0; l < 8; l++){
      console.log(k, l);
      if(k % 2 == 1 && l % 2 == 1 || k % 2 == 0 && l % 2 == 0, l <= 2){
        fill(255, 0, 0);
        ellipse(k * 10 + 5, l * 10 + 5, 8);
      }
      else if(k % 2 == 1 && l % 2 == 1 || k % 2 == 0 && l % 2 == 0, l >= 5){
        fill(0);
        ellipse(k * 10 + 5, l * 10 + 5, 8);
      }
      }
    }
  }
