import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {DepositProps} from "../types/deposits";

export const fetchDepositsData = createAsyncThunk<DepositProps[], void, {rejectValue:string}>(
    'deposits/fetchDepositsData',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<DepositProps[]>('http://localhost:8000/deposits')

            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки данных')
        }
    }
)