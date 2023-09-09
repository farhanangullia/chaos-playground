import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {
    Link
} from "react-router-dom";

import { Grid, Card, CardActions, Button, CardContent, Typography } from '@mui/material';

function AppsPage() {

    const apps = [
        { "name": "Likes App", "description": "Like stuff...", "labels": ["Go", "Postgres", "Redis", "OTEL"], "route": "/likes-app", "disabled": false },
        { "name": "eCommerce App", "description": "Add to cart and place orders!", "labels": ["Python", "Postgres", "Redis"], "route": "/ecommerce-app", "disabled": false },
    ]

    const displayApps = () => {
        if (Object.keys(apps).length > 0) {
            return (
                <>
                    {apps.map((app, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                            <Card style={{ borderRadius: '20px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', height: '245px' }} key={app.name}>
                                <CardContent style={{ marginTop: '0px' }}>

                                    <Box sx={{ my: 3, mx: 2 }}>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {app.name}
                                                </Typography>
                                            </Grid>
        
                                        </Grid>
                                        <Typography color="text.secondary" variant="body2">
                                            {app.description}
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={1}>
                                        {app.labels.map((label, index) => (
                                            <Chip label={label} size="small" variant="outlined" />
                                        ))}
                                    </Stack>
                                </CardContent>
                                <Divider variant="middle" />
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Button style={{ width: '80%' }} color="squid" variant="contained" component={Link} to={app.route} disabled={app.disabled}>
                                        PLAY
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}
                </>
            )
        }
    }


    return (
        <>

            <Grid container spacing={2} style={{ marginTop: '5px', height: '100%' }} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>

                    <Grid container spacing={2} direction="row" >

                        {displayApps()}

                    </Grid>

                </Grid>
            </Grid>
        </>
    );

}

export default AppsPage;