import React,{useState} from 'react'
import {AiOutlineSlack} from 'react-icons/ai'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import {FaSlack} from 'react-icons/fa'


async function registerUser(credentials) {
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
  const [response, setresponse] = useState()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");


    const handleAPIcall = async e => {   
        e.preventDefault();
        const responseFetch = await registerUser({
            username,
            password
        });
        if(responseFetch.response){
          setresponse(responseFetch.response)
        } else{
          
          setToken(username);
          setcredentials(
            {
              username:username,
            }
          )
          history.push("/home")
        }
    }


    function handleSubmit(e){
        let tmpResultPassCheck = checkPassword()
        console.log(tmpResultPassCheck)
        if(tmpResultPassCheck === true){
            console.log("true")
            handleAPIcall(e)
        } else {
            setresponse(tmpResultPassCheck)
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
      <div className=" flex justify-center ">
        <div className=" w-3/4 md:w-1/3">
          <div className=" my-10 flex flex-row items-center justify-center">
            <FaSlack size="50"></FaSlack>
            <h1 className="ml-2 text-5xl">Slack Lite</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl">Please register</p>
          </div>
          <div className="flex flex-row justify-center mb-5">
            <p className="mr-2 text-sm">Do you already have an account?</p>
            <Link className="text-blue-700 underline text-sm" to="/login">Login</Link>
          </div>
          <form onSubmit={handleSubmit} className="">
            <p className="text-red-500">{response}</p>
            <div className="mb-5">
              <p>Username</p>
              <input placeholder="max mustermann" className=" px-2 w-full outline-none border border-gray-400 rounded-md p-1" type="text" onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className="mb-5">
              <p>Password</p>
              <input placeholder="your password" className=" px-2 w-full outline-none border border-gray-400 rounded-md p-1" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-9">
              <p>Retype password</p>
              <input placeholder="retype your passowrd" type="password" className=" px-2 w-full outline-none border border-gray-400 rounded-md p-1" onChange={e => setPasswordCheck(e.target.value)} />
            </div>
            <div>
              <button className="w-full outline-none rounded-md bg-primary p-2 text-white" onClick={handleSubmit} >Register</button>
            </div>
          </form>
        </div>
      </div>
    )
}

/*
        <div className=" flex flex-col align-middle">
        <h1>Please Register</h1>
        <Link to="/login">Login</Link>
        <div onSubmit={handleSubmit}>
          <p className="text-red-500">{response}</p>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label><label>
            <p>Retype password</p>
            <input type="password" onChange={e => setPasswordCheck(e.target.value)} />
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div> */

MainRegister.propTypes = {
    setToken: PropTypes.func.isRequired
}
