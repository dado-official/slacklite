import React,{useState} from 'react'
import {AiOutlineSlack} from 'react-icons/ai'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";


async function loginUser(credentials) {
    console.log("login")
    return fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    
      .then(data => data.json())
      
}


export default function MainRegister({setToken, setcredentials}) {

  const history = useHistory()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState()


    const handleAPIcall = async e => {   
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log("token")
        setToken(token);
        setcredentials(
          {
            username:username,
          }
        )
        history.push("/home")

    }


    function handleSubmit(e){
        let tmpResultPassCheck = checkPassword()
        console.log(tmpResultPassCheck)
        if(tmpResultPassCheck === true){
            console.log("true")
            handleAPIcall(e)
        } else {
            setPasswordErrorMessage(tmpResultPassCheck)
        }
    }

    function checkPassword(){
        if(password !== passwordCheck){
            return "Passwords do not mach!"
        } else if(password.length <= 4){
            return "Password must be longer than 4 charakters."
        } else {
            return true
        }
    }
    

    return (
        <div className=" flex flex-col align-middle">
        <h1>Please Register</h1>
        <Link to="/login">Login</Link>
        <div onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label
          ><label>
            <p>Retype password</p>
            <input type="password" onChange={e => setPasswordCheck(e.target.value)} />
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
            {passwordErrorMessage != null ? <p className=" text-red-800">{passwordErrorMessage}</p>:null}
          </div>
        </div>
      </div>
    )
}

MainRegister.propTypes = {
    setToken: PropTypes.func.isRequired
}
