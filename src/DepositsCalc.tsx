import React, {ChangeEvent, useCallback} from 'react';
import './App.css'
import CustomSelect from "./components/CustomSelect";
import {depositTypes} from "./App";
import {percentUnicValue} from "./functions/percentUnicValue";
import {percentStandartValue} from "./functions/percentStandartValue";
import {percentReplenishValue} from "./functions/percentReplenishValue";

interface DepositsCalcProps {
    deposit: string
    onChangeDeposit: (value: string) => void
    // sumValue: string
    // sumReplValue: string


    // onChangeSum: (e: ChangeEvent<HTMLInputElement>) => void
    unicResultClick: (sum: number, period: number, percent: number) => void
    unicBet: number | undefined
    replBet: number | undefined
    standBet: number | undefined
    periodRepl: string
    periodStand: string
    replSumValue: string
    standSumValue: string
    unicSumValue: string
    periodUnic: string
    inputSum: string
    inputPeriod: string
    onChangeUnicSum: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStandSum: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeReplSum: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeUnicPeriod: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStandPeriod: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeReplPeriod: (e: ChangeEvent<HTMLInputElement>) => void
}

const DepositsCalc = (props: DepositsCalcProps) => {

    const {
        deposit,
        onChangeDeposit,
        // onChangeSum,


        // sumReplValue,
        // sumValue

        periodUnic,
        unicResultClick,
        unicBet,
        replBet,
        standBet,
        periodRepl,
        standSumValue,
        replSumValue,
        periodStand,
        unicSumValue,
        inputSum,
        inputPeriod,
        onChangeReplSum,
        onChangeStandSum,
        onChangeUnicSum,
        onChangeReplPeriod,
        onChangeStandPeriod,
        onChangeUnicPeriod,

    } = props


    function createLabel(number: number, titles: string[]) {
        const cases = [2, 0, 1, 1, 1, 2];
        return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
    }

    const depositOptions = React.useMemo(() => (
        depositTypes.map(item => (
            {value: item, content: item}
        ))
    ), [])

    return (
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
                  value={inputSum}
                  onChange={onChangeUnicSum}
                    // onChange={onChangeSum}
                  placeholder='Введите сумму'
                />}
                {deposit === 'Стандартный' && <input
                  className='input'
                  type='number'
                  value={inputSum}
                  onChange={onChangeStandSum}

                    // onChange={onChangeSum}
                  placeholder='Введите сумму'
                />}
                {deposit === 'Пополняемый' && <input
                  className='input'
                  type='number'
                  value={inputSum}
                  onChange={onChangeReplSum}

                    // onChange={onChangeSum}
                  placeholder='Введите сумму'
                />}
            </div>
            <div className="item">
                <p className="text">
                    Срок вклада(дней):
                </p>
                {deposit === 'Универсальный' && <input
                  className='input'
                    // type='number'
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
            {/*<button onClick={unicResultClick}>Рассчитать</button>*/}
        </div>
    );
};

export default React.memo(DepositsCalc);