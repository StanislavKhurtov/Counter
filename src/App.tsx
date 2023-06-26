import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Components/Settings";

function App() {

    return (
        <div className={"App"}>
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
