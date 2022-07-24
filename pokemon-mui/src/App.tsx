import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';
//import card  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Footer from './component/Footer/Footer';

const MyContainer = styled('div')({
  color: 'white',
  backgroundColor: grey[900],
  padding: 8,
  borderRadius: 0,
})

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <MyContainer>
        <Container maxWidth="lg"  sx={{ bgcolor: grey[900] , height: '100vh' }}>
          <Box>
            <Grid container>
                    <Grid item xs={6} sm={4} md={3}>
                    <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Select
                </Button>
              </CardActions>
            </Card>
                    </Grid>
              </Grid>  
          </Box>
        </Container>
      </MyContainer>
    <Footer/>
    </React.Fragment>
  )
}

export default App