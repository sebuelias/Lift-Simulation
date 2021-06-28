// import Lift from './components/Lift';
import './App.css';

//TODO: make floors into seperate component
//TODO: Identify keys needed with floor number
function App() {
  // return <Lift />;
  return (
    <div class='container'>
      <div className='lift-container'>
        <div className='floor'>
          <div className='floor-keys'>
            <button className='button down-button'> DOWN </button>
          </div>
          <div className='lift'>L1</div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 4</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
            <button className='button up-button'> UP </button>
            <button className='button down-button'> DOWN</button>
          </div>
          <div className='lift'>L1</div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 3</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
            <button className='button up-button'> UP </button>
            <button className='button down-button'> DOWN </button>
          </div>
          <div className='lift'>L1</div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 2</div>
        </div>
        <div className='floor'>
          <div className='floor-keys'>
            <button className='button up-button'> UP </button>
          </div>
          <div className='lift'>L1</div>
          {/* <div className='lift'>L2</div> */}
          <div className='floor-num'>Floor no. 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
