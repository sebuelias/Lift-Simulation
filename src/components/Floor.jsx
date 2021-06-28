import React, { useState } from 'react';
import './styles.scss';

export default function Floor() {
  const [numOfLift, setNumOfLift] = useState(2);

  // const liftOnFloor = `<div className='floor-lift'>Lift</div>`

  return (
    <div className='floor'>
      <div className='floor-keys'>Keys</div>
      <div className='lift'>L1</div>
      <div className='lift'>L2</div>
    </div>
  );
}
