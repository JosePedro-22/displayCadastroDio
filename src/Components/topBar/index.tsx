import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Content } from '../Content';

const ResponsiveAppBar = () => {
  
  return (
    <>
      <AppBar style={{backgroundColor:'black'}}>
        <Container maxWidth='xxl'>
          <Toolbar>
            <Grid
              xs={12}
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                <img 
                  src="https://static.wixstatic.com/media/7a378f_5140deabd7d040378d740069cb692b87~mv2.png/v1/crop/x_0,y_10,w_1334,h_493/fill/w_284,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20DIO.png"
                  width={100}
                  height={35} 
                />
              </Grid>
              <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    style={{ fontSize:'15px', fontWeight: '400', lineHeight: '25px', fontStyle: 'bold', marginRight: '10px' }}
                  >
                    HOME
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block'}}
                    style={{ fontSize:'15px', fontWeight: '400', lineHeight: '25px', fontStyle: 'bold', borderRadius: '25px', marginRight: '10px', backgroundColor: 'gray'}}
                  >
                    Entrar
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    style={{ fontSize:'15px', fontWeight: '400', lineHeight: '25px', fontStyle: 'bold', borderRadius: '25px', marginRight: '10px', backgroundColor: 'gray'}}
                  >
                    Cadastrar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
	
}
export default ResponsiveAppBar;