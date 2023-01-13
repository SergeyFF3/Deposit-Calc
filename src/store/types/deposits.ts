import {ReactNode} from "react";

export interface DepositSummNRateProps {
    summ_from?: number
    rate?: number
}

export interface DepositParamProps {
    period_from?: number
    summs_and_rate?:DepositSummNRateProps
}

export interface DepositProps {
    code?: string
    name?: string
    param?: DepositParamProps
}

export interface DepositsSchema {
    data?: DepositProps[]
    isLoading?: boolean
    error?: string

}