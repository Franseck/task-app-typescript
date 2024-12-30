import { Typography } from '@mui/material'
import logo from "../assets/Logo.png"


const Header = () => {
  return (
    <div className='head'>
   <Typography color="error" align="center" variant="h2" component="h1">
    Task App with Typescript
       </Typography>
    <img  src={logo} alt="" className='logos'/>

   </div>
  )
}

export default Header