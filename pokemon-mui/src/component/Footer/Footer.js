import React from 'react'
import '../../App.css';
import {styled} from '@mui/system';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const MainFooter = styled('footer')({
    color: 'white',
    backgroundColor: grey[900],
    padding: 8,
    borderRadius: 0,
});

const List = () =>{ 
    return(
    <ul className="list">
        <li>First Link</li>
        <li>Second Link</li>
        <li>Third Link</li>
        <li>Fourth Link</li>
    </ul>
)}

const Footer = () => {
  return (
    <MainFooter>
        <Container maxWidth="lg">
            <Box className="FooterColumn-1">
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <span>Copyright © 2022, Pokemon MUI , All right reserved.</span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List/>
                    </Grid>
                </Grid>         
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <span>Copyright © 2022, Pokemon MUI , All right reserved.</span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List/>
                    </Grid>
                </Grid>  
            </Box>
            
        </Container>
    </MainFooter>
  )
}

export default Footer