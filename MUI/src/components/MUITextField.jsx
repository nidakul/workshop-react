import React from 'react'
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import { Input, InputAdornment } from '@mui/material';


const MUITextField = () => {
    return (
        <>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim" variant='outlined' />
                <TextField label="İsim" variant='filled' />
                <TextField label="İsim" variant='standard' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim" variant='outlined' color='warning' />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim" variant='outlined' color='warning' helperText="İsminizi giriniz" />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="Kimlik No" variant='outlined' color='warning' helperText="Tcnizi giriniz" disabled="true" />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="Kimlik No" variant='outlined' InputProps={{ readOnly: true }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsminizi giriniz" InputProps={{
                    startAdornment: <InputAdornment position='start'><PersonIcon /></InputAdornment>
                }} variant='outlined' />
                <TextField InputProps={{
                    endAdornment: <InputAdornment position='end'>KG</InputAdornment>
                }} variant='outlined' />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsminizi giriniz" size='small' variant='outlined' />
                <TextField label="İsminizi giriniz" size='medium' variant='outlined' />
            </div>
        </>
    )
}

export default MUITextField