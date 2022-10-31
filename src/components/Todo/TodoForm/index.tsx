import React, { FC, FormEvent, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./index.css";
interface Props {
  addTodo(todo: string): void;
}
const TodoForm: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");
 const [open, setOpen] = React.useState(false);
  const [add , setAdd] = React.useState<any>();
  const [addSub, setAddSub] = React.useState<any>();
  const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
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
    <>
    <form className="todoForm" onSubmit={handleTodo}>
      <div className="form-group">
       <Box component="span"  onClick={(e:any)=>{handleClickOpen()}} sx={{ p: 4,ml: "100px",mt:"-50px", border: '2px dashed white' , justifyContent:"center", display:"flex", width: 450  }}>
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
          defaultValue={todo}
          onChange={(e:any) =>{setTodo(e.target.value)}}
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
          <Button onClick={(e:any) => { handleTodo(e); handleClose() }}>Save</Button>
        </DialogActions>
      </Dialog>
      </div>
      </form>
      </>
  );
};
export default TodoForm; 