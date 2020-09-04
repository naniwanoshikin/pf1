'use strict'; {

// Englishボタンをクリックすると、、、
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
  const advNode = document.getElementById('adv');
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
  advNode.textContent = 'ADVERTISE';
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
  nav1Node.classList.add('jsnav');
  nav2Node.classList.add('jsnav');
  nav3Node.classList.add('jsnav');
  nav4Node.classList.add('jsnav');
  wellNode.classList.add('jshello');
  memNode.classList.add('jslink');
  cafeNode.classList.add('jslink');
  quizNode.classList.add('jslink');
  //クラスをつけたり除いたりを繰り返す機能。
  // wellNode.classList.toggle('name');
  //data-translation属性という独自の属性を定義。
  // installNode.textContent = nameNode.dataset.translation;

}); // クリック終了

// Indexボタンをクリックすると、、
document.querySelector('.pindex').addEventListener('click', () => {
  document.querySelectorAll('p').forEach((p, index) => {
    p.textContent = `Part.${index}`; // p要素の書き換え
  });
});


// 自動切り替え（クリックなし）
// function update() {
//   id属性がついていないセレクタ→querySelector
//   最初の1つを取得
//   document.querySelector('h2').textContent = '式っち!';
//   指定したh2要素
//   document.querySelectorAll('h2')[1].textContent = '式っち!';
// }
// setTimeout(update, 1000);



}
