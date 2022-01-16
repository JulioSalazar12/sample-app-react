import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 10 } /> , divRoot );
// ReactDOM.render( <PrimeraApp /> , divRoot );
// ReactDOM.render( <PrimeraApp saludo='Esta es una propiedad' /> , divRoot );