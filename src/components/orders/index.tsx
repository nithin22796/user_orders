import { useState } from "react";
import Model from "../../core/model";
import { columns } from "../users/meta";

function Orders() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Model
        btnClick={() => setShowForm(!showForm)}
        btnLabel={'Order Details'}
        showForm={showForm}
        heading={'Order List'}
        data={[]}
        columns={columns}
        formAction={() => {}}
      />
    </div>
  )
}

export default Orders