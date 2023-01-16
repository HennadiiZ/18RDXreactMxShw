import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  let counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {
    // counter++;
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
