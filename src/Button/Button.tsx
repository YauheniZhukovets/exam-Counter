import React from 'react';

type ButtonPropsType = {
    title: string
    funcButton: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button disabled={props.disabled} onClick={props.funcButton}>{props.title}</button>
        </div>
    );
};


