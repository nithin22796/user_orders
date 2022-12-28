import React from 'react'
import TextField from '@mui/material/TextField';
import { Orders } from '../../features/store/userOrder';

interface Props {
  order: Orders
  changeHandler: any
}

function OrderForm(props: Props) {
  return (
    <>
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          value={props.order.userName}
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
          value={props.order.itemCount}
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
          value={props.order.address}
          name={'phone'}
          onChange={props.changeHandler}
          variant="standard"
        />
      </div>
    </>
  )
}

export default OrderForm;