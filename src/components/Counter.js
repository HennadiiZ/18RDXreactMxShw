import classes from './Counter.module.css';
import { useSelector } from 'react-redux';

const Counter = () => {
  let counter = useSelector(state => state.counter);
  console.log('counter', counter);

  const toggleCounterHandler = () => {
    // counter++;
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      <div className={classes.value}> {counter} </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
