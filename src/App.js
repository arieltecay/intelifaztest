import { useState } from "react";
import TableUsers from './Components/TableUsers'
import FormUsers from "./Components/FormUsers";


function App() {
  const usersData = [
    { id: 1, name: 'Ariel', lastName: 'Tecay', userName: 'arieltecay', phone: 3816346097, age: 33, email: 'arieltecay@gmail.com' },
    { id: 2, name: 'Bruno', lastName: 'Tecay', userName: 'brunotecay', phone: 3814347094, age: 34, email: 'brunotecay@hotmail.com' },
    { id: 3, name: 'Micaela', lastName: 'Guevara', userName: 'micaelaguevara', phone: 3817345903, age: 30, email: 'micaelaguevara@yahoo.com' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user, e) => {
    user.id = users.length + 1;
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) => {
    // console.log(id);
    setUsers(users.filter(user => user.id !== id))
  }
  
  const [show, setShow] = useState(true)

  return (
    <div className="container">
      <h1 className='text-center'>Crud Ariel Tecay</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Users</h2>
          <FormUsers addUser={addUser} setShow={setShow} show={show} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <TableUsers users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
