import React from 'react';

type ButtonProps = {
    name: string
    callback: () => void
    disabled?: boolean
    className?: string
}

export const Button = (props: ButtonProps) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button className={props.disabled ? "btnActive" : "btn"}
                    onClick={onClickHandler}>{props.name} </button>
        </div>
    );
};

