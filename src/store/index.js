// import redux, { createStore, configureStore, combineReducers } from 'redux';
import { createReducer, createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: false};
// const INCREMENT = 'increment';

const counterSlice = createSlice({
  name: 'counter',
  // initialState: { counter: 0, showCounter: false }
  // initialState: initialState,
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increse(state, action) {
      // state.counter += action.value;
      state.counter += action.payload;
    },
    toggleCounter(state, action) {
        state.showCounter = !state.showCounter
    }
  }
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

// const counterReducer = (state = initialState, action) => {
// //   if ( action.type === 'increment') {
// //     return {
// //       counter: state.counter + 1,
// //       showCounter: state.showCounter
// //     };
// //   }

// //   if ( action.type === 'increse') {
// //     return {
// //       counter: state.counter + action.value,
// //       showCounter: state.showCounter
// //     };
// //   }

// //   if ( action.type === 'decrement') {
// //     return {
// //       counter: state.counter - 1,
// //       showCounter: state.showCounter
// //     };
// //   }

// //   if ( action.type === 'toggle') {
// //     return {
// //       counter: state.counter,
// //       showCounter: !state.showCounter
// //     };
// //   }

// //   return state;


// };

// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer);


const store = configureStore({
  // reducer: counterSlice.reducer
  reducer: { 
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

// counterSlice.actions.toggleCounter
export const counterActions = counterSlice.actions; // Array of actions  - increment(), decrement() and so on
export const authActions = authSlice.actions;

export default store;
// store.createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increase'});
// store.dispatch({ type: 'decrease'});