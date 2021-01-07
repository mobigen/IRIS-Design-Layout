// ****************************
// test
// ****************************

const testConsole = () => {
  console.log("Test Success");
}
testConsole();

// ****************************
// SCSS
// ****************************

// 1. core와 product scss를 분리해서 import 하는 방법
// ----------------------------
// 장: core의 scss에서 파일을 임포트하는 경로가 깔끔함
// 단: 전체 테마 적용시 core/index.scss와 product/index.scss 에 두번 적용해야 함
// import '../core-style/scss/index.scss'
// import '../product-style/scss/index.scss'

// 2. product scss에 core를 포함해 impoart 하는 방법
// ----------------------------
// 장: 테마 변경시, product/index.scss 파일에 themes 선언 순서에 따라 전체 테마/부분 테마 변경 가능
// 단: core의 image, font 경로가 지저분해짐 → 변수로 지정시, 각 프로젝트마다 필요한 변수를 재선언 하여 유지할 수 있음
import '../scss/guide-index.scss'

// ****************************
// svg icon
// ****************************

const requireSvgAll = (r) => {
  r.keys().forEach(r);
}
requireSvgAll(require.context('../core-style/images/icon/', true, /\.svg$/));
requireSvgAll(require.context('../images/icon/', true, /\.svg$/));

// ****************************
// png img
// ****************************

const requirePngAll = (r) => {
  r.keys().forEach(r);
}
requirePngAll(require.context('../core-style/images/', true, /\.png$/));
requirePngAll(require.context('../images/', true, /\.png$/));

// ****************************
// UI Event
// ****************************

// selectbox default button - Toggle
const selectDefaultButton = document.querySelectorAll(".select__default-button");
const selectDefaultButtonToggle = "select__default-button--toggle";

console.log(selectDefaultButtonToggle);

const toggleSelectbox = () => {
  // window OS에서 동작하도록 설정 
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  selectDefaultButton.forEach((i) => {
    i.addEventListener('click', (event) => {
      event.preventDefault();   
         
      i.classList.toggle(selectDefaultButtonToggle)
    })
  })
}

const init = () => {
  toggleSelectbox();
}

init();