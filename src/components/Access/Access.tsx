import React, { useState } from 'react';
import "./Access.css";

type Props = {
    setTimeInSeconds: Function
}

function Access(props:Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handleStartButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState --);
        }, 1000);

        setIntervalId(interval);
    }
return(
        <div className="stopwatch-controls-container">
            <button onClick={handleStartButton} type="button">start</button>
        </div>
    );
}

export default Access;