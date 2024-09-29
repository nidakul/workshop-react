import React from 'react'
import Grid from '@mui/material/Grid2';

const MUIGrid = () => {
    return (
        <div>
            <Grid container>
                <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }} xs={12} sm={6} md={8} lg={9}>ITEM 1</Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} xs={12} sm={6} md={8} lg={9}>ITEM 2</Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid