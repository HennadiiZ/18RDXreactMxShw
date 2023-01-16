import redux, { createStore, configureStore } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: false};
// const INCREMENT = 'increment';

createSlice({
  name: 'counter',
  // initialState: { counter: 0, showCounter: false }
  // initialState: initialState,
  initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increse(state, action) {
      state.counter += action.value;
    },
    toggleCounter(state, action) {
        state.showCounter = !state.showCounter
    }
  }
})

const counterReducer = (state = initialState, action) => {
//   if ( action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if ( action.type === 'increse') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     };
//   }

//   if ( action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if ( action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;


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