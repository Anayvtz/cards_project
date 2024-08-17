import { Button, useAutocomplete } from '@mui/material'
import React, { useState } from 'react'

export default function MyUseStateComponent() {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <Button onClick={() => setToggle(!toggle)}>click</Button>
            <div>{toggle ? "Hello" : "Bye"}</div>
        </div>
    )
}
