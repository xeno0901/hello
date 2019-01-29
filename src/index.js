import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

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

/*const FunctionalComponent = () => (
  <div>
    <h1>함수형 컴포넌트</h1>
    <h2>현재 시간은 {new Date().toLocaleTimeString()}</h2>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>상태없는 컴포넌트</h1>
        <h2>현재 시간은 {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
    };

    setTimeout(() => {
      this.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 5000);

    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>상태있는 컴포넌트</h1>
        <h2>현재 시간은 {this.state.now}</h2>
      </div>
    );
  }
}*/
