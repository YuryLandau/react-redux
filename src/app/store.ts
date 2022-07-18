import { 
    configureStore //Wrapper around the basic Redux createStore() function. It takes your reducer, makes a store. It also has some basic tools for to not seattle things by hand, like automaticaly turns on the ReduxDevTools extension, and other things. In general, helps to avoid mistakes during developmento.
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({ //Can mix reducers automaticaly if passed a reducer object:
    reducer: {
        counter: counterReducer, //After imported in other module, you can use "state.counterReducer" field.
    }
});

export type AppDispatch = typeof store.dispatch; //Gets dispatch function and return it's type.
export type RootState = ReturnType<typeof store.getState>; //returns store state type.
