import React from 'react';
import {Button} from '../Button/Button';
import s from './SettingCounter.module.css'
import Input from '../Input/Input';


type SettingCounterPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    pressSet: () => void
    disabledSet: boolean
    errorMaxInput: string
    errorStartInput: string
}



export const SettingCounter = (props: SettingCounterPropsType) => {

    const onClickHandler = () => {
        props.pressSet()
    }

    return (
        <div className={s.settingCounter}>
            <div className={s.settingDisplay}>
                <Input changeValue={props.changeMaxValue}
                       pressSet={props.pressSet}
                       titleInput={'max:'}
                       errorInput={props.errorMaxInput}
                       value={props.maxValue}
                />

                <Input changeValue={props.changeStartValue}
                       pressSet={props.pressSet}
                       titleInput={'start:'}
                       errorInput={props.errorStartInput}
                       value={props.startValue}
                />
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

