import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import DepositsCalc from "./DepositsCalc";
import {percentUnicValue} from "./functions/percentUnicValue";
import {percentStandartValue} from "./functions/percentStandartValue";
import {percentReplenishValue} from "./functions/percentReplenishValue";

interface DepositProps {
    unic: string
    standart: string
    replenish: string
}

// export const depositTypes: DepositProps = {
//     unic: 'Универсальный',
//     standart: 'Стандартный',
//     replenish: 'Пополняемый'
// }

export const depositTypes = ['Универсальный', 'Стандартный', 'Пополняемый']

export const depositSumms: DepositProps = {
    unic: '1000000',
    standart: '1000000',
    replenish: '50000000'
}

export const depositPeriods: DepositProps = {
    unic: '1',
    standart: '1',
    replenish: '91'
}

function App() {


    const [deposit, setDeposit] = useState(depositTypes[0])

    const [unicSumValue, setUnicSumValue] = useState(depositSumms.unic)

    const [standSumValue, setStandSumValue] = useState(depositSumms.standart)

    const [replSumValue, setReplSumValue] = useState(depositSumms.replenish)

    const [periodUnic, setPeriodUnic] = useState(depositPeriods.unic)

    const [periodStand, setPeriodStand] = useState(depositPeriods.standart)

    const [periodRepl, setPeriodRepl] = useState(depositPeriods.replenish)

    let inputSum = deposit === 'Универсальный' ? unicSumValue
        : deposit === 'Стандартный'
            ? standSumValue : replSumValue

    let inputPeriod = deposit === 'Универсальный' ? periodUnic
        : deposit === 'Стандартный'
            ? periodStand : periodRepl

    const onChangeDeposit = useCallback((value: string) => {
        setDeposit(value)
    }, [])

    const onChangeUnicSum = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUnicSumValue(e.target.value)
    }, [])

    const onChangeStandSum = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setStandSumValue(e.target.value)
    }, [])

    const onChangeReplSum = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setReplSumValue(e.target.value)
    }, [])

    const onChangeUnicPeriod = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPeriodUnic(e.target.value)
    }, [])

    const onChangeStandPeriod = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPeriodStand(e.target.value)
    }, [])

    const onChangeReplPeriod = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPeriodRepl(e.target.value)
    }, [])

    const unicBet = percentUnicValue(Number(unicSumValue), Number(periodUnic))

    const standBet = percentStandartValue(Number(standSumValue), Number(periodStand))

    const replBet = percentReplenishValue(Number(replSumValue), Number(periodRepl))

    function test(sum: number, period: number, percent: number) {

        let result = (sum * percent * period / 365) / 100

        return result
    }

    const unicResultClick = useCallback((sum: number, period: number, percent: number) => {
        test(Number(unicSumValue), Number(periodUnic), Number(unicBet))

    }, [])



    return (
        <div className="App">
            <DepositsCalc
                deposit={deposit}
                onChangeDeposit={onChangeDeposit}
                // sumValue={sumValue}
                // sumReplValue={sumReplValue}


                // onChangeSum={onChangeSum}
                unicResultClick={unicResultClick}
                standBet={standBet}
                replBet={replBet}
                unicBet={unicBet}
                periodRepl={periodRepl}
                periodStand={periodStand}
                replSumValue={replSumValue}
                standSumValue={standSumValue}
                unicSumValue={unicSumValue}
                periodUnic={periodUnic}
                inputSum={inputSum}
                inputPeriod={inputPeriod}
                onChangeUnicSum={onChangeUnicSum}
                onChangeStandSum={onChangeStandSum}
                onChangeReplSum={onChangeReplSum}
                onChangeUnicPeriod={onChangeUnicPeriod}
                onChangeStandPeriod={onChangeStandPeriod}
                onChangeReplPeriod={onChangeReplPeriod}
            />
        </div>
    );
}

export default App;
