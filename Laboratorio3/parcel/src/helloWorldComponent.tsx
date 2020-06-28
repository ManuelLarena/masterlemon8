import React from 'react';
// import "./helloWorldComponentStyles.scss";
const classes = require('./helloWorldComponentStyles.scss');

export const HelloWorldComponent: React.FC = () => {
  return (
    <div>
      <h2 className="title background-title">Hola Mundo</h2>
    </div>
  );
};
