import React, { Component } from 'react';
import './App.css';

function Element(props){
  return <h1>Hello, {props.name}</h1>;
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <React.Fragment>
        <Element name={this.props.name}/>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </React.Fragment>      
    );
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock name="Sumail"/>
        <Toggle/>
      </div>
    );
  }
}

export default App;
