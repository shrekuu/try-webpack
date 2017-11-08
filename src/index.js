import _ from 'lodash';
import Print from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  element.onclick = Print.bind(null, 'Hello webpack!');

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
