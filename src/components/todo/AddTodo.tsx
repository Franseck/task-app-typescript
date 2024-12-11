import { Box, Button, Container, TextField } from '@mui/material'
import { useState } from 'react';
import { IoIosSave } from "react-icons/io";


interface AddTodo{
  addTodo : (task:string) => Promise<void>
}

const AddTodo = ({addTodo}:AddTodo) => {
const [task, setTask] = useState<String>("");
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setTask(e.target.value)

const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(task)

    setTask("");

}
  return (
    <Container>
      <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
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
        onChange={handleChange}
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