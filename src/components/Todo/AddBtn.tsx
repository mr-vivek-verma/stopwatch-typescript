import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card } from '@mui/material';
import { ITodo } from "../../utils/interfaces";




 

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [add , setAdd] = React.useState<any>();
  const [addSub , setAddSub] = React.useState<any>();

  const [todoList, setTodoList] = React.useState<ITodo[]>([
    {
      id: 1,
      todo: "test todo",
      completed: true,
    },
    {
      id: 2,
      todo: "do coding",
      completed: false,
    },
  ]);

  const addTodo = (todo: string): void => {
    if (!todo) {
      alert("please add todo!");
      return;
    }
    const data: ITodo = {
      id: todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
    alert("Todo added successfully!");
  };

  const completeTodo = (id: number): void => {
    setTodoList(
      todoList.map(
        (todo: ITodo): ITodo =>
          todo.id === id
            ? Object.assign(todo, { completed: true }) && todo
            : todo
      )
    );
    alert("Nice job!");
  };

  const deleteTodo = (id: number): void => {
    setTodoList(
      todoList.filter((todo: ITodo): ITodo | null =>
        todo.id !== id ? todo : null
      )
    );
    alert("Todo deleted successfully!");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = (event: any) => {
    setAdd("");
    setAddSub("");
  };
  

  return (
     
    <div>
      <div >
      <Box sx={{ p: 2,ml: "450px", justifyContent:"center", display:"flex", width: 450  }}>
      <TextField
      hiddenLabel
      id="filled-hidden-label-small"     
      defaultValue= {addSub}                                                        
      value= {add}                                       
      variant="filled"                         
      size="small"     
      />
      <Button onClick={handleClear}>Clear</Button>
      </Box>
      </div>
     
      <Box component="span"  onClick={(e:any)=>{handleClickOpen();addTodo(e)}} sx={{ p: 2,ml: "450px", border: '2px dashed white' , justifyContent:"center", display:"flex", width: 450  }}>
      <Button>
      <AddCircleIcon/>
      Add Task</Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What are you working on?</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            What are you working on?
          </DialogContentText> */}
          <TextField
          value={add}
          onChange={(e:any) =>{setAdd(e.target.value)}}
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="text"
            fullWidth 
            variant="standard"
          />
          <DialogContentText>
          Est Pomodoros
          </DialogContentText>
          <TextField
          value={addSub}
          onChange={(e:any) =>{setAddSub(e.target.value)}}
            autoFocus
            margin="dense"
            id="name"      
            label="Add Notes"       
            type="text"
            fullWidth 
            variant="standard"        
          />               
        </DialogContent>        
        <DialogActions>                                                                          
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
