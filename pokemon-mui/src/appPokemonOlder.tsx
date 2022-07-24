import React, {useState, useEffect} from 'react';
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
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';
import Footer from './component/Footer/Footer';

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  }
  type: string[];
  base: Record<string, number>;
}

const MyContainer = styled('div')({
  color: '#000',
  backgroundColor: grey[200],
  padding: 8,
  borderRadius: 0,
})

const appPokemonOlder = () => {
  //ใช้รับค่า จาก input ด้วย filter ส่งค่าลงไปใน Text ด้วย onChange โดยใช้ setFilter by useState
  const [filter, setFilter] = useState("");

  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() =>{
    fetch('/pokemon.json')
      .then(response => response.json())
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon))
  }, [] );

  const lowercaseFilter = filter.toLowerCase();
  const pokemon = allPokemon
    .filter( ({ name: {english}}) => english.toLowerCase()
    .includes(lowercaseFilter)
  
  ).slice(0, 10);
  return (
    <React.Fragment>
      <CssBaseline />
      <MyContainer>
        <Container maxWidth="lg"  sx={{ bgcolor: grey[200] , height: '100vh' }}>
          <Box>
            <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            sx={{ width: '100%' }} 
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            />

          <Typography variant="h1" component="h2">
            {filter}
          </Typography>
          </Box>
          <Box>
            <Grid container>
                    
                      {
                        pokemon.map( (pokemon) => (
                          <Grid key={pokemon.id} item xs={6} sm={4} md={3}>
                          <Card className={`CardPokemon cardPokemon-${pokemon.name.english}`}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {pokemon.name.english}
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

export default appPokemonOlder