import React, {ChangeEvent, ReactNode, useCallback} from 'react';
import './App.css'
import {DepositProps} from "./store/types/deposits";

interface DepositsCalcProps {
    data?: DepositProps[]
    sumValue: string
    sumReplValue: string
    period: string
    periodRepl: string
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const DepositsCalc = (props: DepositsCalcProps) => {

    const {
        data,
        onChangeValue,
        period,
        periodRepl,
        sumReplValue,
        sumValue
    } = props



    const depositName: ReactNode = data?.map(({name}) => {
        return (
            <option key={name}>{name}</option>
        )
    })

    const percentUnicValue = (sum: string, per: string) => {

        let result = ''

        if (per === '1' && sum >= '1000000' && sum < '10000000') {
            return result = '2'
        }

        if (per === '1' && sum >= '10000000' && sum < '50000000') {
            return result = '2.25'
        }

        if (per === '1' && sum >= '50000000') {
            return result = '3'
        }

        if (per > '1' && per < '7' && sum >= '1000000' && sum < '10000000') {
            return result = '3.25'
        }

        if (per > '1' && per < '7' && sum >= '10000000' && sum < '50000000') {
            return result = '4'
        }

        if (per > '1' && per < '7' && sum >= '50000000') {
            return result = '4.25'
        }

        if (per > '6' && per < '14' && sum >= '1000000' && sum < '10000000') {
            return result = '3.5'
        }

        if (per > '6' && per < '14' && sum >= '10000000' && sum < '50000000') {
            return result = '4.05'
        }

        if (per > '6' && per < '14' && sum >= '50000000') {
            return result = '4.25'
        }

        if (per > '13' && per < '21' && sum >= '1000000' && sum < '10000000') {
            return result = '3.75'
        }

        if (per > '13' && per < '21' && sum >= '100000000' && sum < '50000000') {
            return result = '4.1'
        }

        if (per > '13' && per < '21' && sum >= '50000000') {
            return result = '4.25'
        }

        if (per > '20' && per < '31' && sum >= '1000000' && sum < '10000000') {
            return result = '4'
        }

        if (per > '20' && per < '31' && sum >= '100000000' && sum < '50000000') {
            return result = '4.15'
        }

        if (per > '20' && per < '31' && sum >= '50000000') {
            return result = '4.25'
        }

        if (per > '30' && per < '91' && sum >= '1000000' && sum < '10000000') {
            return result = '4.9'
        }

        if (per > '30' && per < '91' && sum >= '100000000' && sum < '50000000') {
            return result = '5.15'
        }

        if (per > '30' && per < '91' && sum >= '50000000') {
            return result = '5.4'
        }

        if (per > '90' && sum >= '1000000' && sum < '10000000') {
            return result = '4.8'
        }
    }

    return (
        <div className="wrapper">
            <h1 className='title'>Депозитный калькулятор</h1>
            <div className="item">
                <p className="text">
                    Тип вклада:
                </p>
                <select className='select'>
                    {depositName}
                </select>
            </div>
            <div className="item">
                <p className="text">
                    Сумма вклада:
                </p>
                <input
                    className='input'
                    type='number'
                    value={sumValue}
                    onChange={onChangeValue}
                    placeholder='Введите сумму'
                />
            </div>
            <div className="item">
                <p className="text">
                    Срок вклада:
                </p>
                <input
                    className='input'
                    type='number'
                    value={period}
                    onChange={onChangeValue}
                    placeholder='Введите сумму'
                />
            </div>
            <div className="item">
                <p className="text">
                    Процентная ставка:
                </p>
                {/*<p>{unicPercent}</p>*/}
            </div>
        </div>
    );
};

export default React.memo(DepositsCalc);