import { useReducer } from 'react';
import './App.css';

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App () {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>add</button>
      <button onClick={() => dispatch({type: 'decrement'})}>sub</button>
    </div>
  )
}
export default App;
