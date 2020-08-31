'use strict';
{

// ボタンをクリックすると、、、
document.querySelector('button').addEventListener('click', () => {
  

  // id属性がついたテキストを書き換え→getElementByIdを使う！
  // 定義
  const installNode = document.getElementById('install');
  const showNode = document.getElementById('show');
  const wellNode = document.getElementById('wellcome');
  const advNode = document.getElementById('adv');
  const aboutNode = document.getElementById('about');
  const profNode = document.getElementById('profile');
  const openNode = document.getElementById('open');
  const skillNode = document.getElementById('skill');
  const hobbyNode = document.getElementById('hobby');
  const featNode = document.getElementById('feat');
  const townNode = document.getElementById('town');
  const contactNode = document.getElementById('contact');
  const freeNode = document.getElementById('free');
  const clickNode = document.getElementById('click');
  const memNode = document.getElementById('members');
  const cafeNode = document.getElementById('cafe');
  const quizNode = document.getElementById('quiz');
  // コメント作成（既存のものは書き換えられてしまう）
  installNode.textContent = 'SHIKITTI INSTALL';
  showNode.textContent = '英語版';
  wellNode.textContent = 'Welcome to my Portfolio!';
  advNode.textContent = 'ADVERTISE';
  aboutNode.textContent = 'ABOUT';
  profNode.textContent = 'PROFILE';
  openNode.textContent = 'For Details';
  skillNode.textContent = 'SKILL';
  hobbyNode.textContent = 'HOBBY';
  featNode.textContent = 'links';
  townNode.textContent = 'THE TOWN';
  contactNode.textContent = 'CONTACT';
  freeNode.textContent = 'Please feel free to contact us';
  clickNode.textContent = 'Click right away!';
  memNode.textContent = 'chat';
  cafeNode.textContent = 'cafe';
  quizNode.textContent = 'quiz';
  // title属性変更
  installNode.title = 'This is title!';
  // style属性変更
  // installNode.style.backgroundColor = 'skyblue';
  // classNameだと、既存のclass属性が書き換えられてしまう（CSSは後回し）
  // installNode.className = 'name';
  //classListを使うと、class属性を追加。こちらの方が便利。
  memNode.classList.add('times');
  cafeNode.classList.add('times');
  quizNode.classList.add('times');
  //toggoleは、クラスをつけたり除いたりを繰り返す便利な機能
  wellNode.classList.toggle('name');
  //data-translation属性という独自の属性を定義する
  // installNode.textContent = nameNode.dataset.translation;



  // 全てのp要素のテキスト書き換え
  document.querySelectorAll('p').forEach((p, index) => {
    // p.textContent = `${index}th p-tag`;
  } )


// クリック終了
});




// 自動切り替え（クリックなし）
function update() {
  // id属性がついていないセレクタのテキストを書き換え→querySelectorを使う！
  // h2セレクタ（最初の1つを取得）
  // document.querySelector('h2').textContent = '式っち!';
  // 指定したh2要素
  // document.querySelectorAll('h2')[1].textContent = '式っち!';
}
setTimeout(update, 1000);



}
