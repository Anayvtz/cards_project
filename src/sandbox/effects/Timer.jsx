import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSnack } from '../../providers/SnackbarProvider';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    const data = useSnack();
    console.log(data);
    data("success", "hello");

    // data.setIsDisplayBox(true);
    useEffect(() => {
        if (isActive == false) {
            clearInterval(intervalId);
            return;
        }
        setIntervalId(setInterval(() => { setSeconds(prev => prev + 1) }, 1000));
    }, [isActive]);
    const handleStart = () => {
        setIsActive(true);
    }
    const handleStop = () => {
        setIsActive(false);
    }
    const handleReset = () => {
        setSeconds(0);
    }
    return (
        <div>
            <Typography>{seconds}</Typography>
            <Button variant="contained" onClick={handleStart}>Start</Button>
            <Button variant="contained" onClick={handleStop}>Stop</Button>
            <Button variant="contained" onClick={handleReset}>Reset</Button>
        </div>
    )
}
