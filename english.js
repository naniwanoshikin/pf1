'use strict'; {

// [English]ボタン
document.querySelector('.english').addEventListener('click', () => {

  // クラス
  class Convers {
    // プロパティ
    constructor(id, word) {
      this.id = id;
      this.word = word; // 英語
    }
    // メソッド
    english() { // text属性：英語に書き換え
      document.getElementById(this.id).textContent = this.word;
    }
    englishtitle() { // title属性
      document.getElementById(this.id).title = 'id名は ' + this.id;
      this.english() // カプセル化
    }
    header() { // style属性
      document.getElementById(this.id).style.color = 'yellowgreen';
    }
    class() {
      document.getElementById(this.id).classList.toggle('js1');
      // className属性: 既存のclass属性が書き換わる。
      // classList属性: class属性を追加。こちらの方が便利。
      // toggle属性: 繰り返し。
    }
    static data() {
      const dat = document.getElementById('vani');
      dat.textContent = dat.dataset.vani; // idとセットで使用
      dat.classList.add('ecolor');
    }
    static show() { // 静的メソッド
      console.log('[English]ボタン');
    }
  } // クラスここまで

  // インスタンス（オブジェクト）
  const convers = [ // id, 英語
    new Convers('shikitti', 'SHIKITTI WORLD'), // 0 header h1
    new Convers('nav1', 'ABOUT'), // 1 nav
    new Convers('nav2', 'WORK'), // 2
    new Convers('nav3', 'TOWN'), // 3
    new Convers('nav4', 'CONTACT'), // 4
    new Convers('wellcome', 'Welcome to my Portfolio!'), // 5 見出し
    new Convers('about', 'ABOUT'), // 6 自己紹介
    new Convers('myself', 'Let me introduce myself.'), // 7 p
    new Convers('profile', 'PROFILE'), // 8 プロフィール
    new Convers('open', 'Details'), // 9 年表
    new Convers('hobby', 'HOBBY'), // 10 趣味
    new Convers('skill', 'SKILL'), // 11 スキル
    new Convers('feat', 'WORK'), // 12 特徴
    new Convers('see1', 'Please see below.'), // 13 p
    new Convers('cafe', 'cafe'), // 14
    new Convers('chat', 'chat'), // 15
    new Convers('quiz', 'quiz'), // 16
    new Convers('town', 'THE TOWN'), // 17 地域紹介
    new Convers('see2', 'Please click below.'), // 18 p
    new Convers('contact', 'CONTACT'), // 19 お問い合わせ
    new Convers('free', 'Please feel free to contact us!'), // 20 p
    new Convers('site1', 'this is cafepage!'), // 21
    // new Convers('vani', 'English World!'), // 22 jQ（エラーあり）
  ];

  // 実行（ここでidを指定する）
  convers[0].header(); // header h1の色

  for (let i = 0; i < convers.length; i++) {
    convers[i].englishtitle(); // 英語とtitleつける
  }
  // クラスに色つける
  const lists = [5, 6, 12, 17, 19, 21];
  lists.forEach((e) => {
    convers[e].class();
  });

  // 静的メソッド
  Convers.data(); // dataset
  Convers.show(); // コンソール出力

}); // [English]ここまで

// [Count]ボタン
document.querySelector('.pindex').addEventListener('click', () => {
  document.querySelectorAll('p').forEach((e, index) => {
    e.textContent = `✔.${index}`; // テキスト
  });
});

// [Vanish]ボタン
// document.querySelector('.van').addEventListener('click', () => {
// });

}
