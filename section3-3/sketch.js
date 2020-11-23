// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
   for(let i = 2000; i <= 2100; i++){
     return console.log(i + "年は" + daysInYear(i) + "日あります。");
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}
function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}
