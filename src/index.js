import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const my = <p>엉?</p>;
const MyCom = () => <p>이렇게 써도 됨?</p>;
  
  class MyClass extends React.Component {
    render() {
      return {
        <div>
          <p>클래스형 컴포넌트 </p>
          <MyCom />
        </div>
      }
    }
  }

ReactDOM.render(<MyClass />, document.getElementById('root'));
  
console.log(my, myCom, myCom(), <myCom />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
