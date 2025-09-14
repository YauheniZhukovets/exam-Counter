import React from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {SettingCounter} from './SettingCounter/SettingCounter';
import s from './Input/Input.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {changeMaxValueAC, changeStartValueAC, incCountAC, pressSetAC, resetCountAC} from './state/counterReducer';

function App() {

    // const [startValue, setStartValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [inc, setInc] = useState<number>(0)
    // const [disableSet, setDisableSet] = useState<boolean>(false)
    // const [errorText, setErrorText] = useState<string>('Enter value and press "set"')

    const startValue = useSelector<AppRootStateType, number>(state => state.count.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    const inc = useSelector<AppRootStateType, number>(state => state.count.inc)
    const disableSet = useSelector<AppRootStateType, boolean>(state => state.count.disableSet)
    const errorText = useSelector<AppRootStateType, string>(state => state.count.errorText)
    const dispatch = useDispatch()


    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newStartValue = JSON.parse(startValueAsString)
    //         dispatch(changeStartValueAC(newStartValue))
    //         // setStartValue(newStartValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         dispatch(changeMaxValueAC(newMaxValue))
    //         // setMaxValue(newMaxValue)
    //     }
    // }, [])

    /*    useEffect(() => {
            dispatch(changeStartValueFromLocalStorageTC())
        }, [])
        useEffect(() => {
            dispatch(changeMaxValueFromLocalStorageTC())
        }, [])*/

    const errorMaxInput = maxValue <= startValue || maxValue <= 0 ? s.errorInput : s.input
    const errorStartInput = startValue < 0 ? s.errorInput : s.input
    const disabledInc = !disableSet || inc === maxValue
    const disabledRes = !disableSet || startValue === inc
    const disabledSet = disableSet || startValue > maxValue || startValue < 0 || maxValue <= 0 || maxValue === startValue

    const changeStartValue = (value: number) => {
        // localStorage.setItem('startValue', JSON.stringify(startValue))
        // dispatch(changeStartValueAC(value))
        dispatch(changeStartValueAC(value))
        // setStartValue(value)
        // setDisableSet(false)
        // if (value < 0 || value >= maxValue) {
        //     setErrorText('Incorrect value!')
        // } else {
        //     setErrorText('Enter value and press "set"')
        // }
    }
    const changeMaxValue = (value: number) => {
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))
        // dispatch(changeMaxValueAC(value))
        dispatch(changeMaxValueAC(value))
        // setMaxValue(value)
        // setDisableSet(false)
        // if (value <= 0 || value <= startValue) {
        //     setErrorText('Incorrect value!')
        // } else {
        //     setErrorText('Enter value and press "set"')
        // }
    }

    const pressSet = () => {
        dispatch(pressSetAC())
        // setInc(startValue)
        // setDisableSet(true)
        // setErrorText('')
    }
    const incCount = () => {
        dispatch(incCountAC())
        // if (inc < maxValue) {
        //     setInc(inc + 1)
        // }
    }
    const resetCount = () => {
        dispatch(resetCountAC())
        // setInc(startValue)
    }

    return (
        <div className={'App'}>
            <Counter
                startValue={startValue}
                errorText={errorText}
                isShowStartTestMessage={!disableSet}
                maxValue={maxValue}
                inc={inc}
                incCount={incCount}
                resetCount={resetCount}
                disabledInc={disabledInc}
                disabledRes={disabledRes}
            />
            <SettingCounter
                startValue={startValue}
                maxValue={maxValue}
                errorMaxInput={errorMaxInput}
                errorStartInput={errorStartInput}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                pressSet={pressSet}
                disabledSet={disabledSet}
            />
        </div>
    );
}

export default App;
