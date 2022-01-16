import {applyMiddleware, combineReducers, createStore} from 'redux';
import {countReducer} from './counterReducer';
import thunk from 'redux-thunk';
import {loadState, saveState} from './utils/localStorage-utils';

const rootReducer = combineReducers( {
    count: countReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe( () => {
    saveState({
        count: store.getState().count
    })
})

// @ts-ignore
window.store = store;


