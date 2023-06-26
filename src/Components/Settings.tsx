//import React, {ChangeEvent, useState} from 'react';
//import {Button} from "../Button";
//
//export const Settings = () => {
//    let [maxValue, setMaxValue] = useState<number>(0)
//    let [minValue, setMinValue] = useState<number>(0)
//
//    return (
//        <div className={"counter"}>
//            <div className={"itemsInput"}>
//                <input type="number" value={maxValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                    console.log(e.currentTarget.value)
//                    let valueMaxString = JSON.parse(e.currentTarget.value)
//                    setMaxValue(valueMaxString)
//                }}/>
//                <input type="number" value={minValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                    console.log(e.currentTarget.value)
//                    let valueMinString = JSON.parse(e.currentTarget.value)
//                    setMinValue(valueMinString)
//                }}/>
//            </div>
//            <div className={"buttons"}>
//                <Button name="set" callback={() => {
//                    console.log(localStorage.getItem('counterValue'))
//
//                }}/>
//            </div>
//
//        </div>
//    );
//};




import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button";

export const Settings = () => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);

    const handleSetClick = () => {
        localStorage.setItem('minCount', JSON.stringify(minValue));
        localStorage.setItem('maxCount', JSON.stringify(maxValue));
    };

    return (
        <div className={"counter"}>
            <div className={"itemsInput"}>
                <input type="text"  value={minValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setMinValue(Number(e.currentTarget.value));
                }} />
                <input type="text" value={maxValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setMaxValue(Number(e.currentTarget.value));
                }}/>
            </div>
            <div className={"buttons"}>
                <Button name="set" callback={handleSetClick}/>
            </div>
        </div>
    );
};