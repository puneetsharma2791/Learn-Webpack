import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './ts/hello.world'
class Calculator extends React.Component {
    constructor(){
        super();

        let calc = {buttons:['+']} as Calc
    }
    render() {
      return <h2>This is a calculator example {this.calc}</h2>;
    }
  }

  ReactDOM.render(<Calculator />, document.getElementById('root'));