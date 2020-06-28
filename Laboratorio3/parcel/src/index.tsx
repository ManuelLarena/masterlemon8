import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './helloWorldComponent';
import './styles.scss';

const LogoImg = require('./content/logo_1.png');

ReactDOM.render(
  <div>
    <img src={LogoImg} />
    <h1>Hello Webpack 4! from React DOM</h1>
    <HelloWorldComponent />
  </div>,
  document.getElementById('root')
);
