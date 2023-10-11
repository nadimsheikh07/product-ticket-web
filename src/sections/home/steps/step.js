import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const Step =()=> {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item lg={3} md={3} sm={12} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="/stepbystepqr.jpg"
          alt="Step 1"
        />
        <CardContent>
         Find the qr from your product package.
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="/stepbystepqr.jpg"
          alt="Step 2"
        />
        <CardContent>
         scan the qr using your mobile phone.
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="/stepbystepqr.jpg"
          alt="Step 3"
        />
        <CardContent>
         after scanning qr code you will be redirected to the detail page there fill the necessary fields.
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="/stepbystepqr.jpg"
          alt="Step 4"
        />
        <CardContent>
         after filling the details simply click on submit button.
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    </Grid>
    </>
  );
}
export default Step;