
import { useState } from 'react';
import './App.css';
import { UserForm } from './components/userForm/UserForm';
import { UserList } from './components/userList/UserList';

function App() {
 const [userInfo, setUserInfo] = useState([])

 const addNewUserInfo = (uName, uAge) => {
  setUserInfo((prevState) => [
    ...prevState,
    {
      name: uName, age: uAge, id: Math.random().toString()
    }
  ]) 
 }

  return (
    <div className="App">
      <UserForm addNewUserInfo={addNewUserInfo}/>
      <UserList userInfo={userInfo}/>
    </div>
  );
}

export default App;
