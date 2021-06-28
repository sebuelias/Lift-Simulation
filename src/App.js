// import Lift from './components/Lift';
import React, { useState } from 'react';
import './App.css';

//TODO: make floors into seperate component
//TODO: Identify keys needed with floor number
//TODO: Add 2nd lift and up/down button logic
function App() {
  const [currentFloor, setCurrentFloor] = useState(1);

  //!To be used when multiple lifts and adding up/down logic
  const [floorPressed, setFloorPressed] = useState(1);

  // return <Lift />;
  return (
    <div class='container'>
      <div className='lift-container'>
        <div className='floor'>
          <div className='floor-keys'>
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
          <div className='lift'>
            {currentFloor === 4 ? <div className='lift-element' /> : null}
          </div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 4</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
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
          <div className='lift'>
            {currentFloor === 3 ? <div className='lift-element' /> : null}
          </div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 3</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
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
          <div className='lift'>
            {currentFloor === 2 ? <div className='lift-element' /> : null}
          </div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 2</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
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
          <div className='lift'>
            {currentFloor === 1 ? <div className='lift-element' /> : null}
          </div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
