import 'normalize.css';
import 'popper.js';
import 'bootstrap';
import './js/main.js';
import './styles/styles.scss';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('test');

    return element;
  }

document.body.appendChild(component());