// Ducks pattern
import { 
    createSlice, //Main API fucntion to define Redux logic;
    PayloadAction //Typescript type, that represents the content of one given action object;
} from "@reduxjs/toolkit";

interface CounterState { //Type of the state
    value: number;
}

const initialState: CounterState = { //Inicial State
    value: 0,
}

const counterSlice = createSlice({ //Reducer logic
    name: 'counter', //reducer name
    initialState, //reducer inicial state
    reducers: { // Defines the diferent logic and updates we gonna have inside this reducer.

        incremented(state){ //Redux toolkit uses a lib called "inmer", that wrapps our state updates and tracks all the mutations.
            state.value++;
        }

        //Decrement

        //Reset
    }
})

export const { incremented } = counterSlice.actions; //exporting action creators;
export default counterSlice.reducer; //exporting a reducer that handle all of those cases;