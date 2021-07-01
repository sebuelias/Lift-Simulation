import React, { useState } from 'react';
import './styles.scss';

export default function Floor(props) {
  const { floorNumber, totalFloors, onKeyPress, currentFloor } = props;
  // const [numOfLift, setNumOfLift] = useState(2);

  return (
    <div className='floor' key={floorNumber}>
      <div className='floor-keys'>
        {floorNumber !== totalFloors ? (
          <button
            className='button up-button'
            onClick={() => {
              onKeyPress(floorNumber);
            }}
          >
            UP
          </button>
        ) : null}
        {floorNumber !== 0 ? (
          <button
            className='button down-button'
            onClick={() => {
              onKeyPress(floorNumber);
            }}
          >
            DOWN
          </button>
        ) : null}
      </div>
      <div className='lift'>
        {currentFloor === floorNumber ? (
          <div className='lift-element'></div>
        ) : null}
      </div>
      <div className='floor-num'>Floor Number: {floorNumber}</div>
    </div>
  );
}
