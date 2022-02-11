import { Button, Container, Box, Typography } from "@mui/material";

const MailTo = ({email, subject='', body='', children}) =>{

    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
}


export default function Buttons(){
    
    
    return(
        <Container
        disableGutters
        maxWidth='xs' sx={{display:'flex', alignItems:'center', flexDirection:'column'}}
        
        >
            <Box
                sx={{p:2}}
            >
                <Button
                    
                    variant="contained"
                    sx={{ textTransform:"none", width:"300px", height:'4rem', bgcolor:'#5B42AC' }}
                >
                    <MailTo email='rupayan.roy16@gmail.com'>
                    <Typography
                        variant="h6"
                        sx={{fontFamily:'Montserrat', fontWeight:'bold', letterSpacing:'2px'}}

                    >Contact Me</Typography> 
                    </MailTo>

                </Button>
            </Box>
            <Box
             sx={{p:2}}
            >
                <Button
                    variant="contained"
                    sx={{ textTransform:"none", width:"300px", height:'4rem', bgcolor:'#F40057' }}
                >
                    <Typography
                        variant="h6"
                        sx={{fontFamily:'Montserrat', fontWeight:'bold', letterSpacing:'2px'}}

                    >Download CV</Typography> 
                </Button>
            </Box>
        </Container>
    )
}