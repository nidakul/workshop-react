import React from 'react'
import Card from '@mui/material/Card';
import Bugatti from '../../public/Bugatti_Divo.jpg'
import { CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const MUICard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={Bugatti}
                    title="Bugatti Divo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bugatti Divo
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione hic sit. Ducimus laudantium, beatae enim sed architecto voluptas consequatur in possimus aspernatur, sit pariatur voluptates dignissimos. Voluptatibus maxime dicta nisi commodi obcaecati molestias ea omnis odit, ullam quo. Molestiae.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div >
    )
}

export default MUICard