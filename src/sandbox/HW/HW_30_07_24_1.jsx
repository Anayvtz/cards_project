import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function HW_30_07_24_1() {
    const [text, setText] = useState("");
    return (
        <div>
            <TextField onChange={(e) => { setText(e.target.value) }}></TextField>
            <Button variant="contained" onClick={(e) => console.log(text)}>LOG</Button>
        </div>
    )
}
