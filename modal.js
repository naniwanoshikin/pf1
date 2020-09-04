'use strict';
{ // モーダル機能

  // idを取得、定義
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  // モーダル表示（hiddenクラス除去）
  open.addEventListener('click', () => {
      mask.classList.remove('hidden');
      modal.classList.remove('hidden');
    });
    
  // 元の画面へ（hiddenクラス付与）
  // close.addEventListener('click', () => {
  // });
  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
      // close.click(); // 上記同様の文。
    });
  

}
