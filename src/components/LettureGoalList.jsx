import React from 'react';

const TitleComponent = () => (
    <h2>강의목표</h2>
);

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li><input type={"checkbox"}/> {this.props.text}</li>;
  }
}

export const LectureGoal = () => (
  <div className="LectureGoal">
    <TitleComponent/>
    <ul>
      <BodyComponent text={"React 개발에 필요한 환경을 구축한다."}/>
      <BodyComponent text={"새로운 자바스크립트 문법을 익힌다."}/>
      <BodyComponent text={"개발 편의를 위한 Intellij환경을 만든다"}/>
      <BodyComponent text={"기본적인 Git 사용법을 익한다."}/>
      <BodyComponent text={"PR코드 리뷰를 응용한 개발프로세스르르 익힌다"}/>
      <BodyComponent text={"React로 간단한 노트앱을 만들어 본다"}/>
    </ul>
    </div>
);

export default LectureGoal;
