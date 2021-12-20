import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Button} from '../Button/Button';
import s from './SettingCounter.module.css'


type SettingCounterPropsType = {
    startValue:number
    maxValue:number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    pressSet: () => void
    disabledSet: boolean
    errorMaxInput: string
    errorStartInput: string
}

export const SettingCounter = (props: SettingCounterPropsType) => {


    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.pressSet()
    }
    const onKeyPressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.pressSet()
        }
    }


    return (
        <div className={s.settingCounter}>
            <div className={s.settingDisplay}>
                <div>
                    <span>{'max value:'}</span>
                    <input
                        onKeyPress={onKeyPressKeyHandler}
                        className={props.errorMaxInput}
                        type={'number'}
                        onChange={onChangeInputMax}
                        value={props.maxValue}
                    />
                </div>
                <div>
                    <span>{'start value:'}</span>
                    <input
                        onKeyPress={onKeyPressKeyHandler}
                        className={props.errorStartInput}
                        type={'number'}
                        onChange={onChangeInputStart}
                        value={props.startValue}
                    />
                </div>
            </div>
            <div className={'button'}>
                <Button
                    title={'set'}
                    funcButton={onClickHandler}
                    disabled={props.disabledSet}
                />
            </div>
        </div>
    );
};

