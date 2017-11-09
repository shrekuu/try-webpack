import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = _.join([
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ], '\n');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./math.js', function () {
    console.log('hi math');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}
