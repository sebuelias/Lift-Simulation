// import Lift from './components/Lift';
import React, { useState } from 'react';
import './App.css';

//TODO: make floors into seperate component
//TODO: Identify up/down buttons needed with floor number
//TODO: Add 2nd lift and up/down button logic
//!How to handle lift element?
//TODO: Animate the lift movement
function App() {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [numOfFloors, setNumOfFloors] = useState(4);

  //!To be used when multiple lifts and adding up/down logic
  const [floorPressed, setFloorPressed] = useState(1);

  // return <Lift />;
  let keys = '';
  let lift = '';

  // for (let i = numOfFloors; i > 0; i -= 1) {
  //   keys += `<div className='keys'>
  //     ${
  //       i !== numOfFloors ? (
  //         <button
  //           className='button up-button'
  //           onClick={() => {
  //             setFloorPressed(i);
  //             setCurrentFloor(i);
  //           }}
  //         >
  //           UP
  //         </button>
  //       ) : null
  //     }
  //     ${
  //       i !== 1 ? (
  //         <button
  //           className='button down-button'
  //           onClick={() => {
  //             setFloorPressed(i);
  //             setCurrentFloor(i);
  //           }}
  //         >
  //           DOWN
  //         </button>
  //       ) : null
  //     }
  //   </div>`;

  //   lift += `${currentFloor === i ? <div className='lift-element' /> : null}`;
  // }

  return (
    <div className='container'>
      <div className='keys-container vertical-floors'>
        <div className='keys floors'>
          <button
            className='button down-button'
            onClick={() => {
              setFloorPressed(4);
              setCurrentFloor(4);
            }}
          >
            DOWN
          </button>
        </div>

        <div className='keys floors'>
          <button
            className='button up-button'
            onClick={() => {
              setFloorPressed(3);
              setCurrentFloor(3);
            }}
          >
            UP
          </button>
          <button
            className='button down-button'
            onClick={() => {
              setFloorPressed(3);
              setCurrentFloor(3);
            }}
          >
            DOWN
          </button>
        </div>

        <div className='keys floors'>
          <button
            className='button up-button'
            onClick={() => {
              setFloorPressed(2);
              setCurrentFloor(2);
            }}
          >
            UP
          </button>
          <button
            className='button down-button'
            onClick={() => {
              setFloorPressed(2);
              setCurrentFloor(2);
            }}
          >
            DOWN
          </button>
        </div>

        <div className='keys floors'>
          <button
            className='button up-button'
            onClick={() => {
              setFloorPressed(1);
              setCurrentFloor(1);
            }}
          >
            UP
          </button>
        </div>
      </div>
      <div className='lift-container vertical-floors'>
        {currentFloor === 4 ? (
          <div className='lift-element-active floors' />
        ) : (
          <div className='lift-element-inactive floors' />
        )}
        {currentFloor === 3 ? (
          <div className='lift-element-active floors' />
        ) : (
          <div className='lift-element-inactive floors' />
        )}
        {currentFloor === 2 ? (
          <div className='lift-element-active floors' />
        ) : (
          <div className='lift-element-inactive floors' />
        )}
        {currentFloor === 1 ? (
          <div className='lift-element-active floors' />
        ) : (
          <div className='lift-element-inactive floors' />
        )}
      </div>
    </div>
  );
}

export default App;
