import React from 'react';
import s from './Counter.module.css'
import {Button} from '../Button/Button';


type CounterPropsType = {
    maxValue: number
    inc: number
    incCount: () => void
    resetCount: () => void
    disabledInc: boolean
    disabledRes: boolean
    isShowStartTestMessage: boolean
    errorText: string
    startValue: number
}

const getStyle = (props: CounterPropsType) => {
    if (props.errorText === 'Incorrect value!' || props.inc === props.maxValue || props.startValue < 0 || props.maxValue < props.startValue) {
        return s.errorTextDisplay
    } else  {
       return s.textDisplay
    }
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={getStyle(props)}>
                {props.isShowStartTestMessage && props.errorText ? props.errorText : props.inc}
            </div>

            <div className={'button'}>

                <Button title={'inc'}
                        funcButton={props.incCount}
                        disabled={props.disabledInc}
                />
                <Button title={'reset'}
                        funcButton={props.resetCount}
                        disabled={props.disabledRes}
                />
            </div>
        </div>
    )
}
