import { Typography } from "@mui/material"


const Emoji = (props) => (
   <div
    style={{display:'flex', alignItems:'center', margin:'5px'}}
    
   >
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        style = {{ margin:'0 8px 2px 0' }}
    >
        {props.symbol}
    </span>
    <Typography
        variant="subtitle2"
        sx={{fontFamily:'Montserrat', letterSpacing:'2px'}}
    >
        <b>{props.label}</b>
    </Typography>
    </div>
    
)


export default Emoji