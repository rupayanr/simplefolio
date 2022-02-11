import { Avatar, Container, Typography, Box, Card, CardActions, CardContent, CardActionArea, Chip } from "@mui/material";
import Emoji from "./Emoji";

export default function Hero() {
  return (
    <Container 
    disableGutters
    maxWidth='xs' sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <Box
            
            sx={{p:4, display:'flex', justifyContent:'space-between', alignItems:'center', mb:'-2rem', mt:'4rem'}}
        >
            <Avatar 
            
            sx={{height:50, width:50, margin:'5px 5px 5px 5px', marginRight:'1.5rem'}}
            src='/public/images/dp.jpg'  alt='Rupayan' />
            
            <Typography
                variant="h5"
                sx={{fontFamily:'Montserrat', color:'#fafafa', letterSpacing:'2px'}}
            >
                <b>Rupayan Roy</b>

                <Typography
                    variant="subtitle2"
                    sx={{fontFamily:'Montserrat', color:'#fafafa', fontWeight:'thin'}}
                >
                Software Engineer, India
                </Typography>
            </Typography>
            
        </Box>

        <Box 
            sx={{p:2}}
        >
            <Card
            
                sx={{bgcolor:'#2d2d2d', maxWidth:'300px'}}
            >
            <CardContent
            
                sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'flex-start'}}
            >  

            
                    <Typography 
                    variant="h6"
                    component="p"
                    sx={{fontFamily:'Montserrat', color:'#fafafa'}}
                    >
                    Hi there 👋 netizen, 
                    here are some services I provide: 
                    </Typography>
        
                <div
                    style={{fontFamily:'Montserrat', color:'#fafafa', fontSize:'1.3rem', display:'flex', flexDirection:'column', padding:'10px' }}
                >
                    <Emoji label='Application Design and Development' symbol='💻'/>
                    <Emoji label='Cloud Migrations' symbol='☁️' />
                    <Emoji label='Technical Documentation' symbol='📝' />

                </div>

            </CardContent>
            
                <Box sx={{p:3, display:'flex', justifyContent:'space-between', flexWrap:'wrap', marginTop:'-1.5rem'}}>
                    <Chip label='LinkedIn' sx={{color:'white'}} size="medium" variant="outlined" onClick={() => console.log('clicked')} />
                    <Chip label='Github' sx={{color:'white'}} size="medium" variant="outlined" onClick={() => console.log('clicked')} />
                    <Chip label='Twitter' sx={{color:'white'}} size="medium" variant="outlined" onClick={() => console.log('clicked')} />
                
                </Box>

            </Card>
        </Box>
    </Container>
  )
}
