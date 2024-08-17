import React from 'react'
import PageHeader from '../Components/PageHeader'
import MyButton from './propsAndChildren/MyButton'
import { Typography } from '@mui/material'
import Countries from './effects/Countries'
import Timer from './effects/Timer'
import Counter from './memoization/Counter'
import GrandParent from './context/GrandParent'
import SnackbarProvider from '../providers/SnackbarProvider'
import FormExample from './forms/FormExample3'

export default function SandBoxPage() {
    return (
        <div>
            <PageHeader title="SandBox page" subtitle="welcome to sandbox page" />
            {/*  <GrandParent /> */}
            {/*  <Counter /> */}
            <FormExample />
            <SnackbarProvider>
                <Timer />
            </SnackbarProvider>
            <Countries />
        </div>
    )
}
