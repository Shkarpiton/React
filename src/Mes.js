import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Button  from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItem from '@material-ui/core/ListItem';
import './style.css';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div>
      <Button onClick={handleClickOpen}><Select /></Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                
                <MenuItem value={1} className="numbers" role="button">Jan </MenuItem>
                <MenuItem value={2} className="numbers" role="button">Feb </MenuItem>
                <MenuItem value={3} className="numbers" role="button">Mar </MenuItem>
                <MenuItem value={4} className="numbers" role="button">Apr </MenuItem>
                <MenuItem value={5} className="numbers" role="button">May </MenuItem>
                <MenuItem value={6} className="numbers" role="button">Jun </MenuItem>
                <MenuItem value={7} className="numbers" role="button">Jul </MenuItem>
                <MenuItem value={8} className="numbers" role="button">Aug </MenuItem>
                <MenuItem value={9} className="numbers" role="button">Sep </MenuItem>
                <MenuItem value={10} className="numbers" role="button">Oct </MenuItem>
                <MenuItem value={11} className="numbers" role="button">Nov </MenuItem>
                <MenuItem value={12} className="numbers" role="button">Dec </MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
