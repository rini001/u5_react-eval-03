import React ,{useState} from 'react'
import {AuthContext} from "../contexts/AuthContext"
export const Login = () => {
      const [data, setData] = useState({
            "password": "",
            "username": "",   
    });
    const {login}= React.useContext(AuthContext)
    const {password,username}=data
    const handleData = (e) => {
        const { name, value } = e.currentTarget;
        
        setData({
          ...data,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) =>login(res.token))
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="password"
            placeholder='password'
            value={password}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={username}
            onChange={handleData}
          />
        </div>
       <button onClick={login}>Login</button>
        </form>
    </div>
  )
}
