import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Styles from "./styles.module.css";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../app/hooks';
import { v4 as uuidv4 } from 'uuid';
import UserForm from "./userForm";

interface IForm {
  isOpen: boolean;
  title: string;
  action: any;
  cancel: any;
}

const initialUserState = {
  name: '',
  email: '',
  phone: '',
  address: ''
}

const initialOrderState = {
  name: '',
  email: '',
  phone: '',
  address: ''
}

function Form(props: IForm) {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(initialUserState)
  const [order, setOrder] = useState(initialOrderState)

  const sendData = () => {
    const payload = {
      id: uuidv4(),
      ...user
    }
    console.log(payload)
    dispatch(props.action(payload))
    props.cancel();
  }

  const handleInputChange = (e: any) => {
    setUser(prevState => {
      return {
        ...prevState,
      [e.target.name]: e.target.value
      }
    })
  }

  const UserForms = () => {
    return <UserForm changeHandler={handleInputChange} user={user} />
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
            {props.title === 'Add User' ? UserForms() : <p>Needs To Implement</p>}
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