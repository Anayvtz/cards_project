import React, { useContext } from 'react'
import { useData } from './DataProvider'
/* import { MyContext } from './GrandParent' */

export default function GrandChild() {
    /*  const context = useContext(MyContext); */
    const result = useData();
    return (
        <div>GrandChild {context.data1}</div>
    )
}
