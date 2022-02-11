
import { AppBar, Toolbar, Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import styles from '../styles/Home.module.css'

export default function Navigation({section}) {
  return (
    <Container
        maxWidth='sm'
        disableGutters
    >   
        <AppBar 
        sx={{bgcolor:'#2d2d2d'}}
        position="fixed"

        >  
            
            <Toolbar 
            >
            <Typography
                
                variant='h6'
                sx={{fontFamily:'Lucida Console', letterSpacing:'3px'}}
            >
                SIMPLEFOLIO
            </Typography>
            </Toolbar>
            
        </AppBar>
        </Container>  
    
  )
}
