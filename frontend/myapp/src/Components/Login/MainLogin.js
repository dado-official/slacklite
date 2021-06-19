import React,{useState} from 'react'
import {AiOutlineSlack} from 'react-icons/ai'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import MainRegister from './MainRegister';


async function loginUser(credentials) {
    console.log("login")
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}


export default function MainLogin({setToken, setcredentials}) {

  const history = useHistory()

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        //setToken(token);
        setcredentials(
          {
            username:username,
          }
        )
        history.push("/home")
    }
    

    return (
        <div className=" flex flex-col align-middle">
        <h1>Please Log In</h1>
        <Link to="/register">Register</Link>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
}

MainLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}
