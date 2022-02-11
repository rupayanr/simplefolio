
import { Card, CardContent, Container, Divider, Typography, Box } from "@mui/material"


const Skill = ({skill, rating, color}) =>{


    const width = rating * 1.6 + 'rem'

    return(
        <div
            style={{display:'flex', flexDirection:'column', alignContent:'flex-start', height:'4rem'}}
        >
            <Typography
                variant='h6'
                sx={{fontFamily:'Montserrat', color:'#fafafa'}}
            >
                {skill}
            </Typography>
            <div style={{backgroundColor:'#C4C4C4', width:'250px', height:'0.9rem', marginTop:'5px'}}>
                <Divider sx={{height:'0.9rem', bgcolor:`${color}`, width:{width}}}/>
            </div>
        </div>
    )
}

const SkillCard = ({type, skills}) =>{

    return(
        <Box
            sx={{p:2}}
        >

        <Card
            sx={{bgcolor:'#2d2d2d', minWidth:'300px'}}
        
        >
            <CardContent
                sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', margin:'10px'}}
            >
                <Typography
                    variant='subtitle2'
                    sx={{color:'white', letterSpacing:'2px', textTransform:'uppercase', mb:'8px'}}
                >
                {type}
                </Typography>
                {skills.map((item) =>{
                    const {skill, rating, color} = item
                    console.log(color)
                
                    return(
                        <Skill key={skill} skill={skill} rating={rating} color={color} />
                    )
                
                })} 
            </CardContent>
        </Card>
        </Box>
    )
}


export default function Skills() {

    const skills = 
    [
        {type: 'Languages', skills: [{skill: "Javascript", rating:8, color:'#03DAC5'}, {skill: "C/C++", rating:7, color:'#03DAC5'}, {skill:'Python', rating:'5', color:'#03DAC5'}]},
        {type: 'Databases', skills: [{skill: "MySQL", rating:8, color:'#F40057'}, {skill: "mongoDb", rating:6, color:'#F40057'}, {skill:'Firebase', rating:'8', color:'#F40057'}]},
        {type: 'Frameworks', skills: [{skill: "Express", rating:6, color:'#5B42AC'}, {skill: "React", rating:8, color:'#5B42AC'}, {skill:'Flask', rating:'5', color:'#5B42AC'}]},
        {type: 'Devops', skills: [{skill: "AWS", rating:8, color:'#03DAC5'}, {skill: "Azure", rating:7, color:'#03DAC5'}, {skill:'Kubernetes', rating:'5', color:'#03DAC5'}]},
    ]

  return (

    <Container
        disableGutters
        maxWidth='xs'
        sx={{display:'flex', flexDirection:'column', alignItems:'center'}}
    >
        {skills.map((item) =>{

            const {type, skills} = item
            return(
                <SkillCard key={type} type={type} skills={skills}  />
            )
        })}
    </Container>
  )
}
