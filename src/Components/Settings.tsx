import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button";

export const Settings = () => {
    let [maxValue, setMaxValue] = useState<string>("")
    let [minValue, setMinValue] = useState<string>("")

    return (
        <div className={"counter"}>
            <div className={"itemsInput"}>
                <input type="number" value={maxValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    console.log(e.currentTarget.value)
                    setMaxValue(e.currentTarget.value)
                }}/>
                <input type="number" value={minValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    console.log(e.currentTarget.value)
                    setMinValue(e.currentTarget.value)
                }}/>
            </div>
            <div className={"buttons"}>
                <Button name="set" callback={() => {
                }}/>
            </div>

        </div>
    );
};

