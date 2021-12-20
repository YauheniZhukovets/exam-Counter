import React from 'react';
import {Button} from './Button';

type counterProps = {
    startValue: number
    maxValue: number
    count: number
    addCount: () => void
    resetCount: () => void
}

export const Counter = (props: counterProps) => {

    return (
        <div className={'counter'}>
            <div className={'display'}><span
                className={props.count === props.maxValue ? 'errorMessage' : ''}>{props.count}</span></div>
            <div className={'buttonCount'}>

                <Button title={'inc'}
                        Value={props.maxValue}
                        count={props.count}
                        funcButton={props.addCount}
                />
                <Button title={'reset'}
                        Value={props.startValue}
                        count={props.count}
                        funcButton={props.resetCount}
                />
            </div>
        </div>
    )
}
