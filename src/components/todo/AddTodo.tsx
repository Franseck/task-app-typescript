import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { IoIosSave } from "react-icons/io";


interface AddTodos{
  addTodo : (task:string) => Promise<void>
}

const AddTodo = ({addTodo}: AddTodos) => {
const [task, setTask] = useState<string>("");
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setTask(e.target.value)

const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
addTodo(task)
    setTask("");

}
  return (

     <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        variant="outlined"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        onChange={handleChange}
        // onChange={e=>setTask(e.target.value)}
        value={task}
      />
      <Button
        variant="contained"
        endIcon={<IoIosSave />}
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
      >
        Save Todo
      </Button>
    </Box>
 
  )
}

export default AddTodo