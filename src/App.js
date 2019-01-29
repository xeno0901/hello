import React, {Component} from 'react';
//import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    isUnmount: false,
    data: [
      {name: 'React 개발에 필요한 환경을 구축한다', completed: true},
      {name: '새로운 자바스크립트 문법을 익힌다', completed: false},
      {name: '개발편의를 위한 BSCode IDE를 익한다', completed: false},
      {name: '기본적인 git 사용법을 익힌다', completed: true},
      {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다', completed: false},
      {name: 'React로 간단한 노트앱을 만들어 본다.', completed: false},
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      const items = this.state.data;
      const data = items.map(item => {
        item.completed = true;
        return item;
      });

      this.setState({
        data: data,
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        isUnmount: true,
      });
    }, 10000);
  }

  render() {
    return <div>{!this.state.isUnmount && <Todos title={'강의목표'} items={this.state.data} />}</div>;
  }
}

export default App;
