let initialState = {
    startValue: 0,
    maxValue: 5,
    inc: 0,
    disableSet: false,
    errorText: 'Enter value'
}
type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-START-VALUE':
            if (action.value < 0 || action.value >= state.maxValue) {
                return {...state, startValue: action.value, disableSet: false, errorText: 'Incorrect!'}
            } else {
                return {...state, startValue: action.value, disableSet: false, errorText: 'Enter value'}
            }

        case 'CHANGE-MAX-VALUE': {
            if (action.value <= 0 || action.value <= state.startValue) {
                return {...state, maxValue: action.value, disableSet: false, errorText: 'Incorrect!'}
            } else {
                return {...state, maxValue: action.value, disableSet: false, errorText: 'Enter value'}
            }
        }
        case 'PRESS-SET': {
            return {...state, inc: state.startValue, disableSet: true, errorText: ''}
        }
        case 'INC-COUNT': {
            if (state.inc < state.maxValue) {
                return {...state, inc: state.inc + 1}
            } else {
                return state
            }
        }
        case 'RESET-COUNT': {
            return {...state, inc: state.startValue}
        }
        /*     // Case from LocalStorage
         case 'SET-START-VALUE-FROM-LS': {
             return {...state, startValue: action.value}
         }
         case 'SET-MAX-VALUE-FROM-LS': {
             return {...state, maxValue: action.value}
         }*/

        default:
            return state
    }
}

type ActionType = ChangeStartValueACType | ChangeMaxValueACType | PressSetACType
    | IncCountACType | ResetCountACType /*| SetStartValueFromLocalStorageACType*/
/* | SetMaxValueFromLocalStorageACType*/

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (value: number) => {
    return {type: 'CHANGE-START-VALUE', value} as const
}
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => {
    return {type: 'CHANGE-MAX-VALUE', value} as const
}
type PressSetACType = ReturnType<typeof pressSetAC>
export const pressSetAC = () => {
    return {type: 'PRESS-SET'} as const
}
type IncCountACType = ReturnType<typeof incCountAC>
export const incCountAC = () => {
    return {type: 'INC-COUNT'} as const
}
type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {type: 'RESET-COUNT'} as const
}
// Action Creator from localStorage
// type SetStartValueFromLocalStorageACType = ReturnType<typeof setStartValueFromLocalStorageAC>
// export const setStartValueFromLocalStorageAC = (value: number) => {
//     return {type: 'SET-START-VALUE-FROM-LS', value} as const
// }
// type SetMaxValueFromLocalStorageACType = ReturnType<typeof setMaxValueFromLocalStorageAC>
// export const setMaxValueFromLocalStorageAC = (value: number) => {
//     return {type: 'SET-MAX-VALUE-FROM-LS', value} as const
// }
//THUNK
//Record
// export const changeStartValueTC = (value: number) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
//     let startValue = getState().count.startValue
//     localStorage.setItem('startValue', JSON.stringify(startValue + 1))
//     dispatch(changeStartValueAC(value))
// }
// export const changeMaxValueTC = (value: number) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
//     let maxValue = getState().count.maxValue
//     localStorage.setItem('maxValue', JSON.stringify(maxValue + 1))
//     dispatch(changeMaxValueAC(value))
// }

//Read
// export const changeStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     let startValueAsString = localStorage.getItem('startValue')
//     if (startValueAsString) {
//         let newStartValue = JSON.parse(startValueAsString)
//         dispatch(setStartValueFromLocalStorageAC(newStartValue))
//     }
// }
// export const changeMaxValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     let maxValueAsString = localStorage.getItem('maxValue')
//     if (maxValueAsString) {
//         let newMaxValue = JSON.parse(maxValueAsString)
//         dispatch(setMaxValueFromLocalStorageAC(newMaxValue))
//     }
// }