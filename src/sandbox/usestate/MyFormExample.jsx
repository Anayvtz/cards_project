import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
export default function MyFormExample() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
    });
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    console.log(data);
    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                    label="First Name"
                    vairant="outlined"
                    value={data.firstName}
                    onChange={(e) =>
                        setData((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                />
                <TextField
                    label="Last Name"
                    vairant="outlined"
                    value={data.lastName}
                    onChange={(e) =>
                        setData((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                />
                <Button variant="contained">Send</Button>
            </Container>
        </div>
    );
}