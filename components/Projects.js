import { Container, Card, Box, Typography, CardContent, Button } from "@mui/material";

function Project({type, title, skills, color}) {


    return (
    <Box
      sx={{p:2}}
    >
    <Button
        sx={{textTransform:'none'}}                
    >
        <Card
            sx={{bgcolor:color, minWidth:'300px'}}
        >
            <CardContent
                sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'flex-start', margin:'10px'}}
            
            >   
                <Box
                    sx={{display:'flex', alignItems:'flex-start'}}
                >   
                    <Box
                        sx={{m:"0 0 1rem 0"}}
                    >
                        <Typography
                            variant='subtitle2'
                            sx={{color:'white', letterSpacing:'2px', textTransform:'uppercase'}}
                        >
                            {type}
                        </Typography>
                    </Box>
                    <Box>
                    <a href='#'>
                        
                    </a>
                    </Box>
                </Box>
        
                <Typography
                    variant='h5'
                    sx={{color:'white', letterSpacing:'2px', flexGrow:1, fontFamily:'Montserrat', m:"0 0 2rem 0"}}
                >
                    <b>{title}</b>
                </Typography>
        
        
                    <Box
                        sx={{display:'flex', justifyContent:'space-between', minWidth:'200px', alignItems:'flex-start', mt:'1rem', fontFamily:'Montserrat', color:'white'}}
                    >
                        {   
                            skills.map((skill) =>{
                                
                                return(
                                    <Typography
                                    variant='subtitle2'
                                    key={skill}>{skill}</Typography>
                                ) 
                            })
                        }
                    </Box>
        
            </CardContent>
        </Card>
    </Button>
  </Box>
    )
}

export default function Projects() {

    const projects =
    [
        {type: 'Chat System', title: 'Cryptic', skills:['ReactJs', 'NodeJs', 'Firebase'], color:'#5B42AC'},
        {type: 'Password Manager', title: 'Passone', skills:['React Native', 'Expo', 'Firebase'], color:'#F40057'},
        {type: 'ELearning', title: 'Learntech', skills:['MySQL', 'Php', 'Javascript'], color:'#03DAC5'},

    ]


  return (
  
    <Container
        disableGutters
        maxWidth='xs' 
        sx={{display:'flex', alignItems:'center', flexDirection:'column'}}
    >
      {
          projects.map((item) =>{

            const {type, title, skills, color} = item

            return(
                <Project key={type} type={type} title={title} skills={skills} color={color} />
            )
          })
            


      }

    </Container>

  )
}



  