$(function() {


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// header

// h1大きさ
$('#install')
.mouseover(function() {  // マウスがのった時
  $(this).animate({'font-size': '20px'}, 300);
})
.mouseout(function() {  // マウスが外れた時
  $(this).animate({'font-size': '18px'}, 300);
})
.mousemove(function(e) {
  // $(this).text(e.pageX);  // マウスの座標テキストイベントを表示
});

// h1へ戻る
$('#install').click(function() {
  $('html, body').animate(
    {'scrollTop': 0},
    350); // 速さ
});

// ナビスクロール
$('header a').click(function() {
  var id = $(this).attr('href'); // 各id取得
  var position = $(id).offset().top; // 高さ取得
  $('html,body').animate({ 
    'scrollTop': position - 100 // その高さへ
  }, 'fast');
});
// ドロップダウンメニュー（アコーディオン機能）
$('.menubtn').click(function() { // クリックしたとき、
  var $answer = $('nav').find('ul'); // nav直下のulが
  if($answer.hasClass('open')) { // openしていたら、
    $answer.removeClass('open'); // openやめて
    $answer.slideUp(); // 隠す。
    // $('nav').find('.menubtn').text('++'); // 書き換え
  } else { // openしていなかったら、
    $answer.addClass('open'); // openして
    $answer.slideDown(); // 表示。
    // $('nav').find('.menubtn').text('--'); // 書き換え    
  }
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// main

// [Vanish]ボタン
$('.van').click(function() {
  var p = $('<h2 id="vani" style="font-size: 24px;">').text('Hello World!').addClass('vanish'); // vanish
  $('#root1').after(p); // 前に挿入
});
// ONメソッド：読み込まれた時に存在していない要素を処理
$('body').on('click', '.vanish', function() { //clickするとvanishする機能
  $(this).remove(); // 削除
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 取り消し線
$('.script > li').click(
  function() {
  $(this).css('text-decoration', 'line-through');
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 地域紹介
//◀️▶️ボタン表示の状態について定義（下記1, 2に適用）
function toggleChange() {
  var slideIndex = $('.slide').index($('.active')); //アクティブ状態になっている番号を取得
  $('.change').show(); // ◀️ボタン表示
  if (slideIndex === 0) {  // 最初の時
    $('.prev').hide(); // ◀️ボタン消す
  } else if (slideIndex === $('.slide').length - 1) { //最後
    $('.next').hide(); // ▶️ボタン消す
  }
  // 番号の色
  $('.hide').css('background', '#e0f5ff');
  $('.hide').eq(slideIndex).css('background', '#e2eba3');
}

// １、クリックした番号をアクティブにする
$('.hide').click(function() {
  $('.active').removeClass('active'); // active状態を全て削除
  var Index = $('.hide').index($(this)); // clickした番号の
  $('.slide').eq(Index).addClass('active'); // 画像をactiveにする。
  // ◀️▶️ボタン表示
  toggleChange();
});
//２、◀️▶とアクティブクラス
$('.change').click(function() {
  var $activer = $('.active'); // active状態を
  $activer.removeClass('active'); // 全て削除
  if ($(this).hasClass('next')) { // ▶️ボタンを押した時、
    $activer.next().addClass('active'); // その次をactiveにする
  } else {
    $activer.prev().addClass('active'); // その前をactiveにする
  }
  // ◀️▶️ボタン表示
  toggleChange();
});


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// お問い合わせ
$('#checked') // JSXでは適用不可？？？
.focus(function() { // クリックした時
  $(this).css('color', 'green');
})
.blur(function() {  // 外した時
  $(this).css('color', 'red');
})
.change(function() {  // 値を変えると、
  alert('確認完了');
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// フッター
// SNSアイコン
// $('.animated-hover').hover( // マウスが
//   function() {
//   $(this).animate({'font-size': '18px'}, 300); // のっている時
//   }, function() {
//   $(this).animate({'font-size': '16px'}, 300); // のっていない
//   }
// );

});
