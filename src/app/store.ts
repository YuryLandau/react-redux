import { 
    configureStore //Wrapper around the basic Redux createStore() function. It takes your reducer, makes a store. It also has some basic tools for to not seattle things by hand, like automaticaly turns on the ReduxDevTools extension, and other things. In general, helps to avoid mistakes during development.
                //Automaticaly adds the "ThunkMiddleware"
                //Automaticaly turns on development checks, catching accidental mutations, per exemple.
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({ 
    //Can mix reducers automaticaly if passed a reducer object:
    //Usualy takes a bunch of reducers functions, but we have created them in "conterReducer", the ones we are importing.
    
    reducer: { //Automaticaly calls "combine reducers".
        counter: counterReducer, //After imported in other module, you can use "state.counterReducer" field.
    } //With that, we end up with a "state.counter" field in o.
});

export type AppDispatch = typeof store.dispatch; //Gets dispatch function and return it's type.
export type RootState = ReturnType<typeof store.getState>; //returns store state type.
