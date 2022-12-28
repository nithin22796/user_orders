import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Form from '../../components/users/form';

interface Props {
  title: string;
  children?: any;
  isOpen: boolean;
  cancel: () => void;
  submit: any;
}

export default function FormDialog(props: Props) {
  const getData = (data: any) => {
    console.log(data);
  }
  const renderForm = (title: string) => {
    switch (title) {
      case 'Add User':
        // return <Form  action={props.submit}/>

      default:
        break;
    }
  }
  return (
    <div>
      <Dialog open={props.isOpen} onClose={props.cancel}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          {/* {renderForm(props.title)} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.cancel}>Cancel</Button>
          <Button onClick={props.submit}>{props.title}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}