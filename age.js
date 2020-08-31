'use strict';
{
// 年齢選択をドロップダウン表示
  var age = document.getElementById("age");
  for (var i = 15; i<= 50; i++) {
    var option = document.createElement("option"); //optionタグ作成
    // option.value = i;
    option.innerText = i +'歳'; //テキスト
    age.appendChild(option);
  }





}
