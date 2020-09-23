'use strict'; {
// [English]ボタン「
document.querySelector('.english').addEventListener('click', () => {
  
  // クラス
  class Convers {
    constructor(id, word) { // プロパティ
      this.id = id;
      this.word = word;
    }
    // メソッド
    convert() { // text属性：書き換え（英訳）
      document.getElementById(this.id).textContent = this.word;
    }
    titl() { // title属性
      document.getElementById(this.id).title = 'id名: ' + this.id + 'です！';
      this.convert() // カプセル化
    }
    style() { // style属性
      document.getElementById(this.id).style.color = 'yellowgreen';
    }
    // clsN() { // className属性：既存のclass属性が書き換えられてしまう。
    //   document.getElementById(this.id).className = 'js-font';
    // }
    clsL() { // classList：class属性を追加。こちらの方が便利。
      document.getElementById(this.id).classList.add('js-font');
    }
    togl() { // classをつけたり除いたりを繰り返す。
      document.getElementById(this.id).classList.toggle('js-font');
    }
    datas() { // data-translation属性という独自の属性。
      document.getElementById(this.id).textContent = nameNode.dataset.translation;
    }
    static show() { // 静的メソッド
      console.log('Englishボタンを押しました');
    }
  }

  // インスタンス（オブジェクト）
  const convers = [ // id, 英訳
    new Convers('shikitti', 'SHIKITTI WORLD'), // 0 header h1
    new Convers('nav1', 'ABOUT'), // 1 nav 
    new Convers('nav2', 'WORK'), // 2
    new Convers('nav3', 'TOWN'), // 3
    new Convers('nav4', 'CONTACT'), // 4
    new Convers('wellcome', 'Welcome to my Portfolio!'), // 5 見出し
    // new Convers('vani', 'English World!'), // 6 jQ（エラーあり）
    new Convers('about', 'ABOUT'), // 7 自己紹介
    new Convers('myself', 'Let me introduce myself.'), // 
    new Convers('profile', 'PROFILE'), // 9 プロフィール
    new Convers('open', 'Details'), // 10 年表
    new Convers('hobby', 'HOBBY'), // 11 趣味
    new Convers('skill', 'SKILL'), // 12 スキル
    new Convers('feat', 'WORK'), // 13 特徴
    new Convers('see1', 'Please see below.'), // 14
    new Convers('cafe', 'cafe'), // 15
    new Convers('chat', 'chat'), // 16
    new Convers('quiz', 'quiz'), // 17
    new Convers('town', 'THE TOWN'), // 18 地域紹介
    new Convers('see2', 'Please click below.'), // 19
    new Convers('contact', 'CONTACT'), // 20 お問い合わせ
    new Convers('free', 'Please feel free to contact us!'), // 21 p
  ];

  // 実行
  for (let i=0; i<convers.length; i++) {
    convers[i].titl();
  }
  convers[0].style(); // h1の色
  // convers[7].clsN();
  const lists = [5, 6, 12, 17, 19];
  lists.forEach((e) => {
    convers[e].togl(); // クラスをトグル
  });
  Convers.show(); // 静的メソッド

}); // [English]ボタン」

// [Count]ボタン
document.querySelector('.pindex').addEventListener('click', () => {
  document.querySelectorAll('p').forEach((e, index) => {
    e.textContent = `✔️.${index}`;
  });
});


}
