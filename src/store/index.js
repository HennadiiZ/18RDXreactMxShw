import { createReducer, createSlice, configureStore } from '@reduxjs/toolkit';

// import counterSliceReducer from './counter';
// import authSliceReducer from './auth';

import counterSlice from './counter';
import authSlice from './auth';

// const initialCounterState = {counter: 0, showCounter: false};

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state, action) {
//       state.counter++;
//     },
//     decrement(state, action) {
//       state.counter--;
//     },
//     increse(state, action) {
//       state.counter += action.payload;
//     },
//     toggleCounter(state, action) {
//         state.showCounter = !state.showCounter
//     }
//   }
// });


//----------------------------------------------------------------

// const initialAuthState = { isAuthenticated: false };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     }
//   }
// });


const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer,
    auth: authSlice.reducer
    // counter: counterSliceReducer,
    // auth: authSliceReducer
  }
});

// export const counterActions = counterSlice.actions; // Array of actions  - increment(), decrement() and so on
// export const authActions = authSlice.actions;

export default store;
