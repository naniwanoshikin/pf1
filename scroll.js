'use strict'; {
  // React.jsの中身には対応できない？

  // chart画像
  let node = {
    duration: 900,
    distance: '40%',
    origin: 'right',
    opacity: 0.7, 
    scale: 1.2,
    viewFactor: 0.7,
    interval: 800, // 出だしの遅さ
    rotate: { // 回転
      x: 90,
      y: 90,
      z: 50, // 正面周り
    },
    easing: 'ease-in-out',
  };
  // 写真
  let imgSlide = {
    duration: 800,
    distance: '40%',
    origin: 'left',
    opacity: 0.7, 
    scale: 1.5,
    // delay: 20,
    // viewFactor: 0,
    interval: 400,
  };
  // タイトルやReact類
  let slideUp = {
    duration: 700, // アニメーションの長さ
    distance: '50%', // 移動距離
    origin: 'bottom', // 下から
    opacity: 0.4, // 薄さ
    scale: 0.5, // 初期サイズ
    delay: 20, // アニメーションの遅延
    viewFactor: 0.7, // どれくらい見えたら実行するか 0-1
  };

  // 対象
  let node1 = document.querySelector('.chart');
  let nodeList1 = document.querySelectorAll('.pic > img');
  let nodeArray1 = [ // ここにAll入れることはできない？
    document.querySelector('#wellcome'),
    document.querySelector('#about'),
    document.querySelector('#feat'),
    document.querySelector('#root'),
    document.querySelector('#conta'),
  ];

  // 実行（対象、設定名）
  ScrollReveal().reveal(node1, node);
  ScrollReveal().reveal(nodeList1, imgSlide);
  ScrollReveal().reveal(nodeArray1, slideUp);

}
