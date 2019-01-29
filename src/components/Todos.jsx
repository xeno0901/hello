import React from 'react';

class Todos extends React.Component{

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return(
      <div className="Todos">
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.items.map((item, index) =>{
            return <li key={index}><input type={"checkbox"} checked={item.completed}/> {item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Todos;
