import { createReducer, createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: false};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increse(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state, action) {
        state.showCounter = !state.showCounter
    }
  }
});

export const counterActions = counterSlice.actions; // Array of actions  - increment(), decrement() and so on

// export default counterSlice.reducer;
export default counterSlice;