// Ducks pattern
import { 
    createSlice, //Main API fucntion to define Redux logic;
    PayloadAction //Typescript type, that represents the content of one given action object;
} from "@reduxjs/toolkit";

interface CounterState { //Type of the state
    value: number;
}

const initialState: CounterState = { //Inicial State
    value: 5,
}

const counterSlice = createSlice({ //Reducer logic
    name: 'counter', //reducer name
    initialState, //reducer inicial state
    reducers: { // Defines the diferent logic and updates we gonna have inside this reducer.

        //Our Actions
        incremented(state){ //Redux toolkit uses a lib called "inmer", that allows to mutate our initial state, without the need to use actual react state management techniques.
            state.value++;
        }
    }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;