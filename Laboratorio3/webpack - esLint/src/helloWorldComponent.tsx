import React from 'react';
const classes = require('./helloWorldComponentStyles.scss');

export const HelloWorldComponent: React.FC = () => {
  return (
    <div>
      <h2 className={classes.title}>Hola Mundo</h2>
    </div>
  );
};
