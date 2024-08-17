import { CircularProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Countries() {
    const [allCountries, setAllCountries] = useState([]);
    const [text, setText] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            let response = await fetch("https://restcountries.com/v3.1/all");
            let data = await response.json();
            console.log(data);
            setAllCountries(data);
            setFilteredCountries(data);
        };
        getCountries();
    }, []);
    useEffect(() => {
        setFilteredCountries(allCountries.filter((item) => item.name.common.includes(text)));
    }, [text]);

    if (allCountries.length === 0) {
        return <CircularProgress />;
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }


    return (
        <div>
            <TextField label="enter country" value={text} onChange={handleChange} />
            {filteredCountries.map((country) => (
                <Typography>{country.name.common}</Typography>
            ))}
        </div>
    );
}