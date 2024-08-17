import { Typography } from '@mui/material'
import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
    return (
        <div><Typography>Child</Typography>
            <GrandChild />
        </div>
    )
}
