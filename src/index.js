import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*function tick() {
  console.log(this);
  const element = (
    <div>
      <h1>Hello world!</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'));
}

const Timer = setInterval(tick, 1000);

const Tlog = setTimeout(function() {
  clearInterval(Timer);
}, 5000);

console.log(Timer, Tlog);
*/

ReactDOM.render(<App />, document.getElementById('root'));
