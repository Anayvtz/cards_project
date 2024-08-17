import { Typography } from '@mui/material'
import React, { createContext } from 'react'
import Parent from './Parent'

/* export const MyContext = createContext(); */
export default function GrandParent() {
    /*  const data = {
         data1: 100,
         data2: "something"
     } */
    return (
        <div>
            <Typography>GrandParent</Typography>
            {/*  <MyContext.Provider value={data}> */}
            <Parent />
            {/*  </MyContext.Provider> */}
        </div>
    )
}
