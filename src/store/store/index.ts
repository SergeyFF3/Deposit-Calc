import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import { depositsReducer } from "../slices/depositSlice";
import {DepositsSchema} from "../types/deposits";

export interface StateSchema {
    deposits: DepositsSchema
}


const RootReducer = combineReducers({
    deposits: depositsReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch