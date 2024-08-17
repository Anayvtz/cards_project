import { Typography } from '@mui/material'
import React, { memo } from 'react'

export default memo(function SimpleComponent({ user, printSomething }) {
    console.log("in simple component");
    return (
        <div><Typography>Hello {user.firstName}</Typography>
            <Button onClick={printSomething}>click</Button></div>
    )
})
