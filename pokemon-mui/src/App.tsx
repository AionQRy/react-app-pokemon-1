import React, { useEffect} from 'react';
import './App.css';
import usePokemon from './Hook/usePokemon';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { grey, teal } from '@mui/material/colors';
//import card  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField, Chip } from '@mui/material';
import Footer from './component/Footer/Footer';
import CardPokemon from './component/Pokemon/Card/CardPokemon';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Autocomplete from '@mui/material/Autocomplete';
// import bgPokemon from './images/bg-pokemon.webp';

const MyContainer = styled('div')({
  color: '#000',
  backgroundColor: grey[200],
  padding: 8,
  borderRadius: 0,
});

const CustomizedCard = styled(Card)`
  .water {
    background: #aabaed8c;
    color: #174aee;
  }
  .fire {
    background: #edac8470;
    color: #fb731b;
  }
  .grass {
    background: #5c9a6f66;
    color: #069131;
  }
  .poison {
    background: #673ab76b;
    color: #6c2ce0;
  }
  .flying {
    background: #52a0c34d;
    color: #0e7aab;
  }
  .bug {
    background: #8ac56975;
    color: #2b7800;
  }
  .electric {
    background: #ffc80096;
    color: #8b8000;
  }
  .fairy {
    background: #f2cdd596;
    color: #fa3d66;
  }
`;

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
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={pokemon.map((option) => option.name.english)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        )}
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
                          <CustomizedCard className={`CardPokemon cardPokemon-${pokemon.name.english} type-${pokemon.type[0].toLowerCase()}`}>
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

                                {pokemon.type.map((listType) =>(
                                    <Chip className={listType.toLowerCase()} label={listType} sx={{ fontSize: 13, mr: "5px" }} /> 
                                  ))}
                                                               
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button variant="contained" size="large" color="primary" 
                              sx={{width: "100%", bgcolor: teal[500], color: "#fff",
                              '&:hover': {
                                backgroundColor: teal[800],
                              },}}>
                              <AddCircleOutlineOutlinedIcon sx={{pr: "3px"}} /> Select
                              </Button>
                            </CardActions>
                          </CustomizedCard>
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