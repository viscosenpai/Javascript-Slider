(function () {
  'use strict';
  let slide = document.getElementsByClassName('slide');
  let slideSet = document.getElementById('slideSet');
  let slideNum = slide.length;
  let slideCurrent = 0;
  let slideSetWidth = 0;
  let prev = document.getElementById('slider-prev');
  let next = document.getElementById('slider-next');

  /**
  * スライドの横幅を計算
  */
  for(let i = 0; i < slide.length; i++) {
    slideSetWidth += slide[i].offsetWidth;
  }
  slideSet.style.width = slideSetWidth + 'px';
  
  /**
  * アニメーションを実行する関数
  */
  let sliding = (current) => {
    // slideCurrentが0以下だったら
    if (current < 0) {
      // スライドを最後にスキップ
      slideCurrent = slideNum -1;
    // slideCurrentがslideNumを超えたら
    } else if (current > slideNum - 1) {
      // スライドを最初にスキップ
      slideCurrent = 0;
    }
    slideSet.style.left = slideCurrent * -slide[slideCurrent].offsetWidth + 'px';
  };

  /**
  * prevボタンが押されたときの処理
  */
  prev.addEventListener('click', () => {
    slideCurrent--;
    sliding(slideCurrent);
  }, false);

  /**
  * nextボタンが押されたときの処理
  */
  next.addEventListener('click', () => {
    slideCurrent++;
    sliding(slideCurrent);
  }, false);
})();
