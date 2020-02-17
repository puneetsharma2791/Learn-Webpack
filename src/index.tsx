import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './ts/hello.world'
import "./index.css"
import "./index.scss"
class Calculator extends React.Component {
    constructor(){
        super();
    }
    render() {
        let calc = {buttons:['+']} as Calc
      return <h1>This is a calculator exampl{JSON.stringify(calc)}</h1>;
    }
  }

  ReactDOM.render(<Calculator />, document.getElementById('root'));