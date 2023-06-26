//import React, {useEffect, useState} from 'react';
//import {Button} from "./Button";
//
//export const Counter = () => {
//
//    const minCount = 0;
//    const maxCount = 5;
//
//
//    const [value, setValue] = useState<number>(() => {
//        const valueAsString = localStorage.getItem('counterValue')
//        if (valueAsString) {
//            return JSON.parse(valueAsString)
//        } else {
//            return minCount
//        }
//    });
//
//
//    useEffect(() => {
//        localStorage.setItem('counterValue', JSON.stringify(value))
//    }, [value])
//
//
//    const increment = () => {
//        if (value < maxCount) {
//            setValue(prevValue => prevValue + 1);
//        }
//    };
//
//    const reset = () => {
//        setValue(minCount);
//
//    };
//
//    return (
//        <div className={"counter"}>
//            <div className={value < maxCount ? "display" : "active"}>{value}</div>
//            <div className={"buttons"}>
//                <Button name={"Inc"} callback={increment} disabled={value === maxCount}/>
//                <Button name={"Reset"} callback={reset} disabled={value === minCount}/>
//            </div>
//        </div>
//    );
//}



import React, {useEffect, useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {
    const [value, setValue] = useState<number>(() => {
        const valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            return JSON.parse(valueAsString);
        } else {
            return 0;
        }
    });

    const minCount = Number(localStorage.getItem('minCount')) || 0;
    const maxCount = Number(localStorage.getItem('maxCount')) || 5;

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value));
    }, [value]);

    const handleIncrementClick = () => {
        if (value < maxCount) {
            setValue(prevValue => prevValue + 1);
        }
    };

    const handleResetClick = () => {
        setValue(minCount);
    };

    return (
        <div className={"counter"}>
            <div className={value < maxCount ? "display" : "active"}>{value}</div>
            <div className={"buttons"}>
                <Button name={"Inc"} callback={handleIncrementClick} disabled={value === maxCount}/>
                <Button name={"Reset"} callback={handleResetClick} disabled={value === minCount}/>
            </div>
        </div>
    );
};