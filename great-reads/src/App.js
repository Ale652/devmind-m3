import React from 'react';
import Login from "./Components/Login";
import "./App.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Components/Logout';
import {loginAPI} from   "./Components/PostsAPI";




const App = () => {
  const user = useSelector(selectUser);


//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         email: user.email,
//         password: user.password})
// };
// fetch('http://localhost:8080/user/login', requestOptions)
//     .then(response => response.json())
//     .then(data => this.setState({ postId: data.id }));

console.log(user);
const request = new Request("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify({email: "mmoisealexandra432390@gmail.com",
                 password:"pass"}),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })

  // const onPostDone = () =>{

  //   fetch('http://localhost:8080/user/login',{mode:'cors'}, {
  // method: 'POST',
  // body: JSON.stringify({
  //   email: user.email,
  //   password: user.password,
  // }),
  // headers: {
  //   "Access-Control-Allow-Origin" : "http://localhost:8080/user/login",
  //   "Content-type": "application/json; charset=UTF-8;"
  // },
  // proxy: {
	//   host: 'http://localhost',
	//   port: 8080
	// }
  // }).then(response => {
  //   return response.json()
  // });
  
  //   console.log("OK SENT");
  
  // }

  return (
    <div>
      {user ? <Logout/>: <Login />}
    </div>
  )
}

export default App
