import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function HW_30_07_24() {
    const [toggle, setToggle] = useState(true);
    if (toggle) {
        return (
            <div>
                <Button variant="contained" onClick={() => setToggle(!toggle)}>display</Button>
                <Typography>Hello</Typography>
            </div>
        )
    }
    return (
        <div>
            <Button variant="contained" onClick={() => setToggle(!toggle)}>display</Button>

        </div>
    )
}
