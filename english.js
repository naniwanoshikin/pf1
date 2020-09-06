'use strict'; {
// Englishボタンでテキスト書き換え
document.querySelector('.english').addEventListener('click', () => {

  // id取得、定義
  const installNode = document.getElementById('install');
  const nav1Node = document.getElementById('nav1');
  const nav2Node = document.getElementById('nav2');
  const nav3Node = document.getElementById('nav3');
  const nav4Node = document.getElementById('nav4');
  const aboutNode = document.getElementById('about');
  const featNode = document.getElementById('feat');
  const townNode = document.getElementById('town');
  const contactNode = document.getElementById('contact');
  const wellNode = document.getElementById('wellcome');
  const vaniNode = document.getElementById('vani'); // jQ
  const profNode = document.getElementById('profile');
  const openNode = document.getElementById('open'); // 年表
  const skillNode = document.getElementById('skill');
  const hobbyNode = document.getElementById('hobby');
  const cafeNode = document.getElementById('cafe');
  const memNode = document.getElementById('members');
  const quizNode = document.getElementById('quiz');
  const freeNode = document.getElementById('free'); // お気軽に
  // テキスト（既存のものは書き換えられてしまう）
  installNode.textContent = 'SHIKITTI WORLD';
  nav1Node.textContent = 'ABOUT';
  nav2Node.textContent = 'WORK';
  nav3Node.textContent = 'TOWN';
  nav4Node.textContent = 'CONTACT';
  wellNode.textContent = 'Welcome to my Portfolio!';
  vaniNode.textContent = 'English World!'; // jQ
  aboutNode.textContent = 'ABOUT';
  profNode.textContent = 'PROFILE';
  openNode.textContent = 'For Details';
  skillNode.textContent = 'SKILL';
  hobbyNode.textContent = 'HOBBY';
  featNode.textContent = 'WORK';
  memNode.textContent = 'chat';
  cafeNode.textContent = 'cafe';
  quizNode.textContent = 'quiz';
  townNode.textContent = 'THE TOWN';
  contactNode.textContent = 'CONTACT';
  freeNode.textContent = 'Please feel free to contact us';
  // title属性変更
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

}); // Englishボタン終了

// Countボタンをクリック
document.querySelector('.pindex').addEventListener('click', () => {
  document.querySelectorAll('p').forEach((p, index) => {
    p.textContent = `P.${index}`; // p要素を書き換え
  });
});



}
