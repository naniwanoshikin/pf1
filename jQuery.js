$(function() {


  // $('p').css('color', 'red').hide(7500);
  // $('p').addClass('style'); //クラスつける
  // $('p').text('change'); // 文字列を書き換える
  // $('p').html('<a href="#about" data-all="pro">自己紹介</a>'); //タグも含めて取得
  // $('p').empty(); // 文字を消す
  // $('p').remove(); // 要素自体を消す
  // $('input').val('helloagain'); // 値を入力


  // $('#install').css('color', 'red').css('background', 'skyblue');

  // $('aside').css('display', 'block'); //  
  // 属性セレクタ
  // $('a[href="members/index.html"]').css('background', 'red');
  // $('a[href!="members/index.html"]').css('background', 'red'); //~ない
  // $('a[href*="index"]').css('background', 'red'); //含む
  // $('a[href$="t"]').css('background', 'red'); //で終わる
  // 属性の値を取得
  // console.log($('a').attr('href')); //属性の値
  // console.log($('a').data('all')); //カスタムデータ属性取得
  // $('#open').toggle(1500); //繰り返し処理
  // $('#open').fadeOut(1500, function() {
    // alert('okkkkkkkkk!');  //消えた後の処理もかける
  // });




$('section > h1').slideDown(1500); //元々非表示にしておかないといけない

// 広告
// $('aside').slideDown(1500);









// ドロップダウンメニュー
$('.menubtn').click(function() {
  var $answer = $('nav').find('.acord'); //nav直下のacordクラス
  if($answer.hasClass('open')) { //openしていたら、
    $answer.removeClass('open');
    $answer.slideUp(); //隠す
    // $('nav').find('.menubtn').text('+'); //タグの中身書き換え

  } else {
    $answer.addClass('open'); 
    $answer.slideDown(); //表示    
    // $('nav').find('.menubtn').text('-'); //中身書き換え    
  }
});



// ナビゲーション誘導
$('header a').click(function() {
  var id = $(this).attr('href'); //id名取得
  var position = $(id).offset().top; //高さ取得
  $('html,body').animate({ 
    'scrollTop': position - 100 //高さ
  }, 'fast');
});




// header h1が大きくなるメソッドチェーン
$('#install')
.mouseover(function() {  //マウスがのった時
  $(this).animate({'font-size': '24px'}, 300);
})
.mouseout(function() {  //マウスが外れた時
  $(this).animate({'font-size': '20px'}, 300);
})
.mousemove(function(e) {
  // $(this).text(e.pageX);  //マウスの座標テキストイベントを表示
});





// 取り消し線
$('.script > li').click(
  function() {
  $(this).css('text-decoration', 'line-through');
});







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













// フォームのCSS変更
$('#age')
.focus(function() { //クリックした時
  $(this).css('color', 'green');
})
.blur(function() {  //外した時
  $(this).css('color', 'red');
})
.change(function() {  //値を変えた時
  alert('年齢を入力しました');
});


// SNSアイコン
$('.animated-hover').hover( //マウスが
  function() {
  $(this).animate({'font-size': '18px'}, 300); //のっている時
  }, function() {
  $(this).animate({'font-size': '16px'}, 300); //のっていない時
  }
);


// Vanish!!!!ボタン
$('.call > button').click(function() {
  var p = $('<p>').text('vanish!!!').addClass('vanish'); //vanish
  $(this).before(p); //前に挿入
});
// ONメソッド：読み込まれた時に存在していない要素を処理
$('body').on('click', '.vanish', function() { //clickするとvanishする機能
  $(this).remove(); //削除
});



// ページトップへ
$('#install').click(function() {
  $('html, body').animate(
    {'scrollTop': 0},
    350); //速さ
});
$('#top').click(function() {
  $('html, body').animate(
    {'scrollTop': 0},
    350); //速さ
});



});
