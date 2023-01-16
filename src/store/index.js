import redux, { createStore, configureStore } from 'redux';

// const store = require('redux');

const aState = {counter: 0, showCounter: false};
// const INCREMENT = 'increment';

const counterReducer = (state = aState, action) => {
  if ( action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if ( action.type === 'increse') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    };
  }

  if ( action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if ( action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
// store.createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increase'});
// store.dispatch({ type: 'decrease'});