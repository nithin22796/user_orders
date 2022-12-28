import React from 'react'
import TextField from '@mui/material/TextField';
import { Users } from '../../features/store/userOrder';

interface Props {
  user: Users
  changeHandler: any
}

function userForm(props: Props) {
  return (
    <>
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          value={props.user.name}
          name={'name'}
          onChange={props.changeHandler}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Email ID"
          value={props.user.email}
          name={'email'}
          onChange={props.changeHandler}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Phone"
          value={props.user.phone}
          name={'phone'}
          onChange={props.changeHandler}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Address"
          value={props.user.address}
          name={'address'}
          onChange={props.changeHandler}
          variant="standard"
        />
      </div>
    </>
  )
}

export default userForm