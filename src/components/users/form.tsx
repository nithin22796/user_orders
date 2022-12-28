import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from "./styles.module.css";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../app/hooks';
import { v4 as uuidv4 } from 'uuid';

interface IForm {
  isOpen: boolean;
  title: string;
  action: any;
  cancel: any;
}

function Form(props: IForm) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const sendData = () => {
    const payload = {
      id: uuidv4(),
      name: name,
      email: email,
      phone: phone,
      address: address
    }
    console.log(payload)
    dispatch(props.action(payload))
  }

  return (
    <div>
      <Dialog open={props.isOpen} onClose={props.cancel}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            className={`${Styles.form}`}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="standard-required"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                id="standard-required"
                label="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                id="standard-required"
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="standard"
              />
            </div>
          </Box>
    </DialogContent>
      <DialogActions>
        <Button onClick={props.cancel}>Cancel</Button>
        <Button onClick={sendData}>{props.title}</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default Form