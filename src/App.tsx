import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.css';
import {useAppDispatch} from "./store/store";
import {fetchDepositsData} from "./store/services/fetchDepositsData";
import {useSelector} from "react-redux";
import {getDepositsData} from "./store/selectors/getDepositsData";
import DepositsCalc from "./DepositsCalc";

function App() {

    const dispatch = useAppDispatch()

    const data = useSelector(getDepositsData)

   const [sumValue, setSumValue] = useState('1000000')

    const [sumReplValue, setSumReplValue] = useState('50000000')

    const [period, setPeriod] = useState('1')

    const [periodRepl, setPeriodRepl] = useState('91')

    const onChangeValue = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
       setSumValue(e.target.value)
    }, [])


    const unicSumValue = 1000000

    const unicPeriodValue = 1

    const unicPercent = 2

    const standSumValue = 1000000

    const standPeriodValue = 1

    const standPercent = 2

    const replSumValue = 50000000

    const replPeriodValue = 91

    const replPercent = 4.74

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        return e.target.value
    }, [])

    // const isLoading = useSelector(getDepositsIsLoading)

    // const error = useSelector(getDepositsError)

    React.useEffect(() => {
        dispatch(fetchDepositsData())
    }, [dispatch])

    return (
        <div className="App">
            <DepositsCalc
                data={data}
                sumValue={sumValue}
                sumReplValue={sumReplValue}
                period={period}
                periodRepl={periodRepl}
                onChangeValue={onChangeValue}
            />
        </div>
    );
}

export default App;
