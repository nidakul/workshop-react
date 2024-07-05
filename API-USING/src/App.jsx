import './App.css'
import { useEffect } from 'react';
import axios from 'axios';


const Base_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(Base_URL + "/users");
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(Base_URL + "/users/" + userId);
    console.log(response.data);
  }

  useEffect(() => {
    getAllUsers();
    getUserById(1);
  }, [])


  return (
    <>

    </>
  )
}

export default App
