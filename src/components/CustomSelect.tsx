import React from 'react';

export interface SelectOptions {
    value?: string
    content?: string
}

interface CustomSelectProps {
    value?: string
    options?: SelectOptions[]
    onChange?: (value: string) => void
}

const CustomSelect = (props: CustomSelectProps) => {

    const {
        onChange,
        value,
        options
    } = props

    const selectOptions = React.useMemo(() => options?.map(opt => (
        <option
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options])

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <select
            className='select'
            value={value}
            onChange={onChangeHandler}
        >
            {selectOptions}
        </select>
    );
};

export default React.memo(CustomSelect);