'use strict'; {
// [English]ボタン「
document.querySelector('.english').addEventListener('click', () => {
  
  // クラス
  class Convers {
    constructor(id, word) { // プロパティ
      this.id = id;
      this.word = word;
    }
    // 英訳メソッド
    convert() { // text属性：書き換え
      document.getElementById(this.id).textContent = this.word;
    }
    titl() { // title属性
      document.getElementById(this.id).title = this.id + 'です！';
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
      console.log('クラスから直接呼び出し');
    }
  }

  // インスタンス（オブジェクト）
  const convers = [ // id, 英単語
    new Convers('install', 'SHIKITTI WORLD'), // 0 header h1
    new Convers('nav1', 'ABOUT'), // 1 nav 
    new Convers('nav2', 'WORK'), // 2
    new Convers('nav3', 'TOWN'), // 3
    new Convers('nav4', 'CONTACT'), // 4
    new Convers('wellcome', 'Welcome to my Portfolio!'), // 5 見出し
    new Convers('vani', 'English World!'), // 6 jQ（エラーあり）
    new Convers('about', 'ABOUT'), // 7 自己紹介
    new Convers('profile', 'PROFILE'), // 8 プロフィール
    new Convers('open', 'Details'), // 9 年表
    new Convers('hobby', 'HOBBY'), // 10 趣味
    new Convers('skill', 'SKILL'), // 11 スキル
    new Convers('feat', 'WORK'), // 12 特徴
    new Convers('cafe', 'cafe'), // 13
    new Convers('member', 'chat'), // 14
    new Convers('quiz', 'quiz'), // 15
    new Convers('town', 'THE TOWN'), // 16 地域紹介
    new Convers('contact', 'CONTACT'), // 17 お問い合わせ
    new Convers('free', 'Please feel free to contact us'), // 18 p
  ];

  // 実行
  for (let i=0; i<convers.length; i++) {
    convers[i].titl();
  }
  convers[0].style(); // h1の色
  // convers[7].clsN();
  const lists = [5, 7, 12, 16, 17];
  lists.forEach((e) => {
    convers[e].togl(); // 各トグルで色変える
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
