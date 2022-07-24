import React, { useEffect} from 'react';
import usePokemon from './Hook/usePokemon';

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
import { Button, CardActionArea, CardActions, TextField, Chip } from '@mui/material';
import Footer from './component/Footer/Footer';
import CardPokemon from './component/Pokemon/Card/CardPokemon';

// import bgPokemon from './images/bg-pokemon.webp';

const MyContainer = styled('div')({
  color: '#000',
  backgroundColor: grey[200],
  padding: 8,
  borderRadius: 0,
})

const App = () => {
  const {
    pokemon,
    filter,
    setFilter
  } = usePokemon();

  useEffect(() => {
    console.log("Pokemon Changed")
  }, [pokemon] );


  return (
    <React.Fragment>
      <CssBaseline />
      <MyContainer>
        <Container maxWidth="lg" sx={{ bgcolor: grey[200] , height: 'auto', pt: "5em", pb: "5em" }}>
          <Box>
            <TextField 
            id="outlined-basic" 
            label="Search Your Pokemon !!" 
            variant="outlined"
            sx={{ width: '100%' }} 
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            />

          <Typography variant="h1" component="h2">
            {filter}
          </Typography>
          </Box>
          <Box sx={{pt: "2em"}}>
            <Grid container spacing={2}>
                    
                      {
                        pokemon.map( (pokemon) => (
                          <Grid key={pokemon.id} item xs={6} sm={4} md={3}>
                          <Card className={`CardPokemon cardPokemon-${pokemon.name.english}`}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                sx={
                                  {
                                    height: "175px",
                                    width: "auto",
                                    margin: "0 auto",
                                    padding: "25px 0",
                                    // backgroundImage: `url(${bgPokemon})`,                      
                                  }
                                }
                                image={`/pokemon/${pokemon.name.english.toLowerCase()}.jpg`}
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h3" component="div" 
                                sx={{ fontSize: 21 } }
                                >
                                  {pokemon.name.english}
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div" 
                                sx={{ fontSize: 16 } }
                                >
                                  {pokemon.name.japanese}
                                </Typography>
                                <Chip label={pokemon.type} sx={{ fontSize: 13 }} />                                
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button size="small" color="primary">
                                Select
                              </Button>
                            </CardActions>
                          </Card>
                          </Grid>
                        ))
                      }                               
              </Grid>  
          </Box>
        </Container>
      </MyContainer>
    <Footer/>
    </React.Fragment>
  )
}

export default App