import React,{useState} from 'react';
import './App.css'
import { useEffect } from 'react';

const App=()=>{
   const [users,setUsers]=useState([]);
   const fetchData = () => {
    return fetch("https://reqres.in/api/users?page=1")
          .then((response) => response.json())
          .then((data) => setUsers(data.data));
  }
  useEffect(() => {
    }
  ); 
        return (
          <div className="App">   
          <div className="nav">                               
            <h1>FETCHTECH</h1>
            <button onClick={fetchData}>Get Users</button>
          </div>  
            <div className="people">
              {users?
                  (users.map(({id,first_name,last_name,email})=>(
                <h2 key={id}>Name: {first_name} {last_name} <br></br>Email: {email}</h2>             
                ))):null}
            </div>
          </div>
        );
}

export default App; 

