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


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  
    <div>
      <Box component="span"  onClick={handleClickOpen} sx={{ p: 2,ml: "450px", border: '2px dashed white' , justifyContent:"center", display:"flex", width: 450  }}>
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
