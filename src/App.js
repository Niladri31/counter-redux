import './App.css';
import {useDispatch} from 'react-redux';
import Counter from './Counter';
import { increment,decrement } from './slice/CounterSlice';

function App() {
  
   const dispatch = useDispatch();
  return (
    <div className="App">
       <button  onClick={e=>dispatch(increment())}>Increment</button>
       <Counter/>
       <button onClick={e=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
