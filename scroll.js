'use strict'; {
  // React.jsの中身には対応していない？

  // chart.js
  let node = {
    duration: 900,
    distance: '20%',
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
  // JS
  let imgSlide = {
    duration: 800,
    distance: '30%',
    origin: 'left',
    opacity: 0.7,
    scale: 1.5,
    // delay: 20,
    // viewFactor: 0,
    interval: 400,
    rotate: { // 回転
      x: 70,
      y: 80,
      z: 30, // 正面周り
    },
  };
  // React.js
  let slideUp = {
    duration: 900, // アニメーションの長さ
    distance: '20%', // 移動距離
    origin: 'left', // 下から
    opacity: 0.7, // 薄さ
    scale: 2, // 初期サイズ
    delay: 10, // アニメーションの遅延
    viewFactor: 0.6, // どれくらい見えたら実行するか 0-1
    rotate: { // 回転
      x: 50,
      y: 90,
      z: 90, // 正面周り
    },
  };

  // 対象
  let node1 = document.querySelector('.chart');
  let nodeList1 = document.querySelectorAll('.javalist');
  let nodeArray1 = [
    // document.querySelector('#root0'),
    document.querySelector('#root1'),
    document.querySelector('#root2'),
  ];

  // 実行（対象、設定名）
  ScrollReveal().reveal(node1, node); // chart.js
  // ScrollReveal().reveal(nodeList1, imgSlide); // javascript
  ScrollReveal().reveal(nodeArray1, slideUp); // React.js

}
