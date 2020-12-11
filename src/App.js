import React from 'react';
import './App.css';

import FormHexRGB from './components/HexRGB/Input.js'

function Convert(props) {

  const handleSubmit = evt => {
    evt.preventDefault();
  }

  return (
      <form className='wrap-background' onSubmit={handleSubmit}>
        <FormHexRGB />
      </form>
  )
}

export default Convert;
