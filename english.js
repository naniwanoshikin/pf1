'use strict'; {
// [English]ボタンでテキスト書き換え
document.querySelector('.english').addEventListener('click', () => {

  // id取得
  const installNode = document.getElementById('install');
  const nav1Node = document.getElementById('nav1');
  const nav2Node = document.getElementById('nav2');
  const nav3Node = document.getElementById('nav3');
  const nav4Node = document.getElementById('nav4');
  const wellNode = document.getElementById('wellcome');
  const vaniNode = document.getElementById('vani'); // jQ
  const aboutNode = document.getElementById('about');
  const profNode = document.getElementById('profile');
  const openNode = document.getElementById('open'); // 年表
  const hobbyNode = document.getElementById('hobby');
  const skillNode = document.getElementById('skill');
  const featNode = document.getElementById('feat');
  const cafeNode = document.getElementById('cafe');
  const memNode = document.getElementById('member');
  const quizNode = document.getElementById('quiz');
  const townNode = document.getElementById('town');
  const contactNode = document.getElementById('contact');
  const freeNode = document.getElementById('free'); // お気軽に
  // テキスト（既存のものは書き換えられてしまう）
  installNode.textContent = 'SHIKITTI WORLD';
  nav1Node.textContent = 'ABOUT'; // ナビ
  nav2Node.textContent = 'WORK';
  nav3Node.textContent = 'TOWN';
  nav4Node.textContent = 'CONTACT';
  wellNode.textContent = 'Welcome to my Portfolio!';
  vaniNode.textContent = 'English World!'; // jQ
  aboutNode.textContent = 'ABOUT'; // 自己紹介
  profNode.textContent = 'PROFILE';
  openNode.textContent = 'Details';
  hobbyNode.textContent = 'HOBBY';
  skillNode.textContent = 'SKILL';
  featNode.textContent = 'WORK'; // 特徴
  cafeNode.textContent = 'cafe';
  memNode.textContent = 'chat';
  quizNode.textContent = 'quiz';
  townNode.textContent = 'THE TOWN'; // 地域紹介
  contactNode.textContent = 'CONTACT'; // お問い合わせ
  freeNode.textContent = 'Please feel free to contact us';
  // title属性変更（長押しホバー）
  wellNode.title = 'Wellcome to My Portfolio!';
  // style属性変更
  vaniNode.style.color = 'yellowgreen';
  // classNameだと、既存のclass属性が書き換えられてしまう。
  // installNode.className = 'name';
  // classListを使うと、class属性を追加。こちらの方が便利。
  wellNode.classList.add('js-hello');
  memNode.classList.add('js-hello');
  cafeNode.classList.add('js-hello');
  quizNode.classList.add('js-hello');
  //クラスをつけたり除いたりを繰り返す機能。
  // wellNode.classList.toggle('name');
  //data-translation属性という独自の属性を定義。
  // installNode.textContent = nameNode.dataset.translation;

}); // [English]ボタンここまで


// [Count]ボタン
document.querySelector('.pindex').addEventListener('click', () => {
  document.querySelectorAll('p').forEach((p, index) => {
    p.textContent = `✔️.${index}`; // p要素を書き換え
  });
});


}
