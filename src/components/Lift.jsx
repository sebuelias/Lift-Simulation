import React, { useState } from 'react';
import Floor from './Floor';
import './styles.scss';

export default function Lift() {
  const [numOfFloors, setNumOfFloors] = useState(4);

  return (
    <div className='lift-container'>
      <Floor />
      <Floor />
      <Floor />
      <Floor />
    </div>
  );
}
