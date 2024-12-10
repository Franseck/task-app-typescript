import { Box, Button, Container, TextField } from '@mui/material'
import { IoIosSave } from "react-icons/io";

const AddTodo = () => {
  return (
    <Container>
      <Box sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: {xs:"flex-start" ,sm:"center"},
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}>
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
         />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<IoIosSave />}>
        Save Todo
      </Button>
      </Box>
    </Container>
  )
}

export default AddTodo