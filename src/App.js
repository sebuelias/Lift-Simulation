import React, { useState } from 'react';
import Floor from './components/Floor';
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

  const onFloorKeyPress = (floorNumber) => {
    setFloorPressed(floorNumber);
    setCurrentFloor(floorNumber);
  };

  const generateFloorsArray = (totalFloors) => {
    console.log([...Array(totalFloors + 1).keys()].slice(1).reverse())
    return [...Array(totalFloors + 1).keys()].slice(1).reverse();
  };

  return (
    <div className='container'>
      {generateFloorsArray(numOfFloors).map((floorNum) => {
        return (
          <Floor
            floorNumber={floorNum}
            totalFloors={numOfFloors}
            onKeyPress={onFloorKeyPress}
            currentFloor={currentFloor}
          />
        );
      })}
      {/* <div className='lift-element'></div> */}
    </div>
  );
}

export default App;
