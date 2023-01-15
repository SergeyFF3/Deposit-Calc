import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.css';
import {percentUnicValue} from "./functions/percentUnicValue";
import {percentStandartValue} from "./functions/percentStandartValue";
import {percentReplenishValue} from "./functions/percentReplenishValue";
import CustomSelect from "./components/CustomSelect";

interface DepositProps {
    unic: string
    standart: string
    replenish: string
}

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

export const depositTypes = ['Универсальный', 'Стандартный', 'Пополняемый']

function App() {

    const [deposit, setDeposit] = useState(depositTypes[0])

    const [unicSumValue, setUnicSumValue] = useState(depositSumms.unic)

    const [standSumValue, setStandSumValue] = useState(depositSumms.standart)

    const [replSumValue, setReplSumValue] = useState(depositSumms.replenish)

    const [periodUnic, setPeriodUnic] = useState(depositPeriods.unic)

    const [periodStand, setPeriodStand] = useState(depositPeriods.standart)

    const [periodRepl, setPeriodRepl] = useState(depositPeriods.replenish)

    const [result, setResult] = useState<number | null>(null)

    const unicBet = percentUnicValue(Number(unicSumValue), Number(periodUnic))

    const standBet = percentStandartValue(Number(standSumValue), Number(periodStand))

    const replBet = percentReplenishValue(Number(replSumValue), Number(periodRepl))

    let inputSum = deposit === 'Универсальный' ? unicSumValue
        : deposit === 'Стандартный'
            ? standSumValue : replSumValue

    let inputPeriod = deposit === 'Универсальный' ? periodUnic
        : deposit === 'Стандартный'
            ? periodStand : periodRepl

    const depositOptions = React.useMemo(() => (
        depositTypes.map(item => (
            {value: item, content: item}
        ))
    ), [])

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

    const onChangeResult = useCallback((sum: number, period: number, percent: number) => {
        setResult((sum) + (sum * percent * period / 365) / 100)
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <h1 className='title'>Депозитный калькулятор</h1>
                <div className="item">
                    <p className="text">
                        Тип вклада:
                    </p>
                    <CustomSelect
                        value={deposit}
                        onChange={onChangeDeposit}
                        options={depositOptions}
                    />
                </div>
                <div className="item">
                    <p className="text">
                        Сумма вклада:
                    </p>
                    {deposit === 'Универсальный' && <input
                      className='input'
                      type='number'
                      placeholder='Введите сумму'
                      value={inputSum}
                      onChange={onChangeUnicSum}
                    />}
                    {deposit === 'Стандартный' && <input
                      className='input'
                      type='number'
                      placeholder='Введите сумму'
                      value={inputSum}
                      onChange={onChangeStandSum}
                    />}
                    {deposit === 'Пополняемый' && <input
                      className='input'
                      type='number'
                      placeholder='Введите сумму'
                      value={inputSum}
                      onChange={onChangeReplSum}
                    />}
                </div>
                <div className="item">
                    <p className="text">
                        Срок вклада(дней):
                    </p>
                    {deposit === 'Универсальный' && <input
                      className='input'
                      type='number'
                      placeholder='Количество дней'
                      value={inputPeriod}
                      onChange={onChangeUnicPeriod}
                    />
                    }
                    {deposit === 'Стандартный' && <input
                      className='input'
                      type='number'
                      placeholder='Количество дней'
                      value={inputPeriod}
                      onChange={onChangeStandPeriod}
                    />}
                    {deposit === 'Пополняемый' && <input
                      className='input'
                      type='number'
                      placeholder='Количество дней'
                      value={inputPeriod}
                      onChange={onChangeReplPeriod}
                    />}
                </div>
                <div className="item">
                    <p className="text">
                        Процентная ставка:
                    </p>
                    {deposit === 'Универсальный' && <p>
                        {unicBet}
                    </p>}
                    {deposit === 'Стандартный' && <p>
                        {standBet}
                    </p>}
                    {deposit === 'Пополняемый' && <p>
                        {replBet}
                    </p>}
                </div>
                <div className="item">
                    <p className="text">
                        Итого:
                    </p>
                    {result || result === null ? <h1>{result?.toFixed(3)}</h1> : <h1>Некорректные данные</h1>}
                </div>
                <div className="item">
                    {deposit === 'Универсальный' && <button
                      className='btn'
                      onClick={() => onChangeResult(Number(unicSumValue), Number(periodUnic), Number(unicBet))}
                    >
                      Рассчитать
                    </button>}
                    {deposit === 'Стандартный' && <button
                      className='btn'
                      onClick={() => onChangeResult(Number(standSumValue), Number(periodStand), Number(standBet))}
                    >
                      Рассчитать
                    </button>}
                    {deposit === 'Пополняемый' && <button
                      className='btn'
                      onClick={() => onChangeResult(Number(replSumValue), Number(periodRepl), Number(replBet))}
                    >
                      Рассчитать
                    </button>}
                </div>
            </div>
        </div>
    );
}

export default App;
