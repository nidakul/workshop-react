import './App.css'
import { useEffect } from 'react';
import axios from 'axios';


const Base_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(Base_URL + "/users");
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${Base_URL}/users`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${Base_URL}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    await axios.delete(`${Base_URL}/users/${userId}`);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(Base_URL + "/users/" + userId);
    return (response.data.postId);
  }

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    console.log(postId);
    const postData = await getPostById(postId);
    console.log(postData);
  }

  useEffect(() => {
    // getAllUsers();
    // getUserById(1);

    //json server id'yi otomatik atıyor. O yüzden yazmamıza gerek yok. 
    // const newUser = {
    //   "username": "ayşe",
    //   "password": "ayşe"
    // }
    // createUser(newUser);
    // updateUser("3", {
    //   "username": "alanur",
    //   "password": "alanur"
    // });
    // deleteUserById("9dd1");
    getPost();
  }, [])


  return (
    <>

    </>
  )
}

export default App
