import DataTable from "../../core/table";
import Button from '@mui/material/Button';
import Styles from "./styles.module.css";
import Form from "./form";
import {useState} from "react";
import { useAppSelector } from "../../app/hooks";
import {addUser, getUsers} from "../../features/store/userOrder";

function Users() {
  const [showForm, setShowForm] = useState(false);
  const users = useAppSelector(getUsers);

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState);
  }
  return (
    <>
    <div className={`${Styles.user_header}`}>
      <h1 className={`${Styles.user_headline}`}>Users List</h1>
      <Button className={`${Styles.user_button}`} variant="outlined" onClick={handleButtonClick}>Add User</Button>
    </div>
    <DataTable data={users} />
    {showForm ? (
        <Form isOpen={showForm} action={addUser} cancel={handleButtonClick} title={'Add User'} />
    ) : null};
    <h1>Data in Store</h1>
    </>
  )
}

export default Users;