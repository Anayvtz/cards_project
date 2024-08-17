import React from 'react'
import PageHeader from '../Components/PageHeader'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/RoutesModel';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div>
            <PageHeader title="error 404" subtitle="page not found" />
            <Typography>Oops... the requested URL was not found on this server</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={() => navigate(ROUTES.ROOT)}>Return to home page</Button>
                <Link to={ROUTES.ROOT}>Home</Link>
                <Box>
                    <img src="/robot.png" alt="robot" style={{ width: '100%', height: 'auto' }}></img>
                </Box>
            </div>
        </div>
    )
}
