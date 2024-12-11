import { RiDeleteBin6Fill } from "react-icons/ri";
import { IconButton, ListItem, ListItemText } from '@mui/material'
import React, { FC } from 'react'

interface TodoItem {
    todo: TodoType;
    toggleTodo: ToggleFn;
    deleteTodo:DeleteFn;
}

const TodoItem: FC<TodoItem> = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <ListItem
    disableGutters
    sx={{padding:"1rem", cursor:"pointer"}}
    secondaryAction={
      <IconButton aria-label="comment">
        <RiDeleteBin6Fill onClick={()=>deleteTodo(todo.id)} />
      </IconButton>
    }
  >
    <ListItemText primary={todo.task} onClick={()=>toggleTodo(todo)} />
  </ListItem>
  )
}

export default TodoItem
