import {useState} from "react";
import { useAppSelector } from "../../app/hooks";
import {addUser, getUsers} from "../../features/store/userOrder";
import {columns} from "./meta";
import Model from "../../core/model";

function Users() {
  const [showForm, setShowForm] = useState(false);
  const users = useAppSelector(getUsers);

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState);
  }
  return (
    <Model
      heading="Users List"
      btnClick={handleButtonClick}
      btnLabel={"Add User"}
      columns={columns}
      data={users}
      showForm={showForm}
      formAction={addUser}
    />
  )
}

export default Users;