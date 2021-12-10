import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


// the render method takes two arguments.
// 1. JSX language structure that stands for js & html
// 2. the vanilla dom reference to the div
ReactDOM.render(
  // 1.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 2.
  document.getElementById('root')
);
// serviceWorker.register();

