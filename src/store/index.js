import redux, { createStore, configureStore } from 'redux';

// const store = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
  if ( action.type === 'increase') {
    return {
      counter: state.counter + 1
    };
  }

  if ( action.type === 'decrease') {
    return {
      counter: state.counter - 1
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