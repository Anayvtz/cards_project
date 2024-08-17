import { Button } from '@mui/material'
import React from 'react'

export default function EventComponent() {
    const handleClick = (name) => {
        console.log("click on button" + name);
    }
    return (
        <div>
            <Button variant="contained" onClick={() => handleClick("name")}>click</Button>
        </div>
    )
}
