import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function HW_30_07_24_3() {
    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);
    const addItem = (txt) => { setArr([...arr, txt]); console.log(arr); setText(""); }
    return (
        <div>
            <TextField onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" onClick={() => addItem(text)}>Add</Button>
            <Button variant="contained" onClick={() => setArr([])}>clear</Button>
            <ol>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div >
    )
}
