import { Typography } from '@mui/material'
import logo from "../assets/Logo.png"


const Header = () => {
  return (
    <div>
   <Typography color="error" align="center" variant="h2" component="h1">
    Task App with Typescript
    <img src={logo} alt="" />
   </Typography>
   </div>
  )
}

export default Header