$(function() {

  // jQuery

  // $('p').css('color', 'red').css('background', 'skyblue').hide(7500); // メソッドチェーン
  // $('p').addClass('style'); //クラスつける
  // $('p').text('change'); // 文字列を書き換える
  // $('p').html('<a href="#about" data-all="pro">自己紹介</a>'); //タグも含めて取得
  // $('p').empty(); // 文字を消す
  // $('p').remove(); // 要素自体を消す
  // $('input').val('helloagain'); // 値を入力
  // $('aside').css('display', 'block'); //  
  // 属性セレクタ
  // $('a[href="members/index.html"]').css('background', 'red');
  // $('a[href!="members/index.html"]').css('background', 'red'); //~ない
  // $('a[href*="index"]').css('background', 'red'); //含む
  // $('a[href$="t"]').css('background', 'red'); //で終わる
  // console.log($('a').attr('href')); // 属性の値を取得
  // console.log($('a').data('all')); // カスタムデータ属性取得
  // $('#open').toggle(1500); // 繰り返し処理
  // $('#open').fadeOut(1500, function() { // 消えた後、
    // alert('okkkkkkkkk!');  // アラート表示
  // });
  // $('aside').slideDown(1500); // 元々非表示にしておく

  // english.js

// function update() { // 自動切り替え（クリックなし）
//   id属性がついていないセレクタ→querySelector
//   最初の1つを取得
//   document.querySelector('h2').textContent = '式っち!';
//   指定したh2要素
//   document.querySelectorAll('h2')[1].textContent = '式っち!';
// }
// setTimeout(update, 1000);


//   gitの状態
// １、作業ディレクトリ（ファイルの作成、編集）
// ２、ステージングエリア（インデックス）を経由して、
// ３、リポジトリに保存（ローカル or リモート）


// header

// h1大きさ
$('#install')
.mouseover(function() {  //マウスがのった時
  $(this).animate({'font-size': '20px'}, 300);
})
.mouseout(function() {  //マウスが外れた時
  $(this).animate({'font-size': '18px'}, 300);
})
.mousemove(function(e) {
  // $(this).text(e.pageX);  //マウスの座標テキストイベントを表示
});

// h1へ戻る
$('#install').click(function() {
  $('html, body').animate(
    {'scrollTop': 0},
    350); //速さ
});

// ナビスクロール
$('header a').click(function() {
  var id = $(this).attr('href'); // 各id取得
  var position = $(id).offset().top; // 高さ取得
  $('html,body').animate({ 
    'scrollTop': position - 100 // その高さへ
  }, 'fast');
});
// ドロップダウンメニュー
$('.menubtn').click(function() { // クリックしたとき、
  var $answer = $('nav').find('ul'); // nav直下のulが
  if($answer.hasClass('open')) { // openしていたら、
    $answer.removeClass('open'); // openやめて
    $answer.slideUp(); // 隠す
    // $('nav').find('.menubtn').text('++'); // 書き換え
  } else { // openしていなかったら、
    $answer.addClass('open'); // openする 
    $answer.slideDown(); // 表示
    // $('nav').find('.menubtn').text('--'); // 書き換え    
  }
});


// main

// Vanish!!!ボタン
$('.van').click(function() {
  var p = $('<p id="vani" style="font-size: 24px;">').text('Hello World!').addClass('vanish'); //vanish
  $('#wellcome').after(p); //前に挿入
});
// ONメソッド：読み込まれた時に存在していない要素を処理
$('body').on('click', '.vanish', function() { //clickするとvanishする機能
  $(this).remove(); //削除
});

// 取り消し線
$('.script > li').click(
  function() {
  $(this).css('text-decoration', 'line-through');
});

// 地域紹介
//◀️▶️ボタン表示の状態について定義（下記1, 2に適用）
function toggleChange() {
  var slideIndex = $('.slide').index($('.active')); //アクティブ番号
  $('.change').show(); //◀️ボタン表示
  if (slideIndex === 0) {  //最初の時
    $('.prev').hide(); //◀️ボタン消す
  } else if (slideIndex === $('.slide').length - 1) { //最後
    $('.next').hide(); //▶️ボタン消す
  }
  // 番号の色
  $('.hide').css('background', '#e0f5ff');
  $('.hide').eq(slideIndex).css('background', '#e2eba3');
}

// １、クリックした番号をアクティブにする
$('.hide').click(function() {
  $('.active').removeClass('active'); //active状態を全て削除
  var Index = $('.hide').index($(this)); //clickした番号の
  $('.slide').eq(Index).addClass('active'); //画像をactiveにする。
  // ◀️▶️ボタン表示
  toggleChange();
});
//２、◀️▶とアクティブクラス
$('.change').click(function() {
  var $activer = $('.active'); //active状態を
  $activer.removeClass('active'); //全て削除
  if ($(this).hasClass('next')) { //▶️ボタンを押した時、
    $activer.next().addClass('active'); // その次をactiveにする
  } else {
    $activer.prev().addClass('active'); // その前をactiveにする
  }
  // ◀️▶️ボタン表示
  toggleChange();
});


// コンタクトフォーム
$('#age')
.focus(function() { //クリックした時
  $(this).css('color', 'green');
})
.blur(function() {  //外した時
  $(this).css('color', 'red');
})
.change(function() {  //値を変えると、
  alert('年齢を入力しました');
});

// SNSアイコン
// $('.animated-hover').hover( //マウスが
//   function() {
//   $(this).animate({'font-size': '18px'}, 300); //のっている時
//   }, function() {
//   $(this).animate({'font-size': '16px'}, 300); //のっていない
//   }
// );

});
