import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    changeValue: (value: number) => void
    pressSet: () => void
    titleInput: string
    errorInput: string
    value: number
}

const Input = (props:InputPropsType) => {

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
    }

    const onKeyPressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.pressSet()
        }
    }

    return (
        <div>
            <span>{props.titleInput}</span>
            <input
                onKeyPress={onKeyPressKeyHandler}
                className={props.errorInput}
                type={'number'}
                onChange={onChangeInput}
                value={props.value}
            />
        </div>
    );
};

export default Input;