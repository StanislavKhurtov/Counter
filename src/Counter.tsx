import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incrementsValueAC} from "./BLL/counter-reducer";


export const Counter = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrementClick = () => {
        dispatch(incrementsValueAC())
    }


    return (
        <div className={"counter"}>
            <div className={"display"}>{value}</div>
            <div className={"buttons"}>
                <button onClick={handleIncrementClick}>inc</button>
            </div>
        </div>
    );
};


/*

<div className={"counter"}>
    <div className={value < maxCount ? "display" : "active"}>{value}</div>
    <div className={"buttons"}>
        <Button name={"Inc"} callback={handleIncrementClick} disabled={value === maxCount}/>
        <Button name={"Reset"} callback={handleResetClick} disabled={value === minCount}/>
    </div>
</div>*/
