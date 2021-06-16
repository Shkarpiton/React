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
import { StepButton } from '@material-ui/core';


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
 // const godMes = React.useState(page);
  
  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
 // const handleData = (page) => {
 //   godMes(page)
  //}
  
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
                {/*<MenuItem value={2021} className="numbers" role="button" onClick={handleData('Mes')}>2021 </MenuItem>
                <MenuItem value={2022} className="numbers" role="button" onClick={handleData('Mes')}>2022 </MenuItem>
                <MenuItem value={2023} className="numbers" role="button" onClick={handleData('Mes')}>2023 </MenuItem>
                <MenuItem value={2024} className="numbers" role="button" onClick={handleData('Mes')}>2024 </MenuItem>
                <MenuItem value={2025} className="numbers" role="button" onClick={handleData('Mes')}>2025 </MenuItem>
                <MenuItem value={2026} className="numbers" role="button" onClick={handleData('Mes')}>2026 </MenuItem>
                <MenuItem value={2027} className="numbers" role="button" onClick={handleData('Mes')}>2027 </MenuItem>*/}
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
