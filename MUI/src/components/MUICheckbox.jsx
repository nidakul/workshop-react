import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';

const MUICheckbox = () => {
    const [isConfirm, setIsConfirm] = useState(false);

    const submit = () => {
        if (!isConfirm) {
            alert("Sözleşmeyi onaylayın")
        } else {
            alert("Sözleşme başarıyla gönderildi");
        }
    }
    return (
        <>
            {/* <FormControl component={"fieldset"}>
                <FormLabel>Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox disabled />}
                        label="İlkokul"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Lise"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl> */}
            <FormControl component={"fieldset"}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)} />}
                        label="Kullanım koşullarını kabul ediyorum."
                        labelPlacement="end"
                    />
                    <Button onClick={submit} variant="contained">Formu Gönder</Button>
                </FormGroup>
            </FormControl>
        </>
    )
}

export default MUICheckbox