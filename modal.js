'use strict';
{ // モーダル機能を実装

  // 各idを定義、取得する
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  // hiddenクラス除去（モーダル表示）
  open.addEventListener('click', () => {
      mask.classList.remove('hidden');
      modal.classList.remove('hidden');
    });
    
  // hiddenクラス付与（元の画面へ）
  close.addEventListener('click', () => {
      mask.classList.add('hidden');
      modal.classList.add('hidden');
    });
  mask.addEventListener('click', () => {
    // 上記同様の文で以下と書ける。
      close.click();
    });
  

}
