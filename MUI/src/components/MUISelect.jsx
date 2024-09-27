import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const MUISelect = () => {
    const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);
    console.log(currencies);
    return (
        <div>
            <FormControl sx={{ width: '150px' }}>
                <InputLabel>Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </Select>
            </FormControl>
            <br />
            {/* TextField ile select kullanımı*/}
            <TextField value={currencies} sx={{ width: '450px' }} label="Para Birimi" select onChange={(e) => setCurrencies(e.target.value)}
                SelectProps={{ multiple: true }}
            >
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField>
        </div >
    )
}

export default MUISelect