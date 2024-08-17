import { Button } from '@mui/material'
import React from 'react'

export default function MyButton({ children }) {
    return (
        <div>
            <Button sx={{ color: "white", backgroundColor: "green", "&:hover": { color: "white", backgroundColor: "blue" } }}>click me</Button>
        </div>
    )
}
