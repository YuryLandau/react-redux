import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

//Adding types to useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>(); //typing the return of "useDispatch()"
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //Aliasing useSelector, but adding types to it.