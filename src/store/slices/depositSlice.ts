import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DepositProps, DepositsSchema} from "../types/deposits";
import {fetchDepositsData} from "../services/fetchDepositsData";

const initialState: DepositsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined
}

export const depositsSlice = createSlice({
    name: 'deposits',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDepositsData.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchDepositsData.fulfilled, (state, action: PayloadAction<DepositProps[]>) => {
                state.isLoading = false
                state.data = action.payload
                state.error = undefined
            })
            .addCase(fetchDepositsData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })


    }
})

export const { reducer: depositsReducer } = depositsSlice
export const { actions: depositsActions} = depositsSlice
