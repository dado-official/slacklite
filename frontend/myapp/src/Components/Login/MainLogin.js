import React,{useState} from 'react'
import {FaSlack} from 'react-icons/fa'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import MainRegister from './MainRegister';


async function loginUser(credentials) {
    console.log("login", credentials)
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
    const [response, setresponse] = useState()
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const responseFetch = await loginUser({
          username,
          password
        });

        console.log(responseFetch)
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
    

    return (
      <div className=" flex justify-center ">
        <div className=" w-3/4 md:w-1/3">
          <div className=" my-10 flex flex-row items-center justify-center">
            <FaSlack size="50"></FaSlack>
            <h1 className="ml-2 text-5xl">Slack Lite</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl">Please Log In</p>
          </div>
          <div className="flex flex-row justify-center mb-5">
            <p className="mr-2 text-sm">You do not have an account?</p>
            <Link className="text-blue-700 underline text-sm" to="/register">Register</Link>
          </div>
          <form onSubmit={handleSubmit} className="">
            <p className="text-red-500">{response}</p>
            <div className="mb-5">
              <p>Username</p>
              <input placeholder="max mustermann" className=" px-2 w-full outline-none border border-gray-400 rounded-md p-1" type="text" onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className="mb-9">
              <p>Password</p>
              <input placeholder="your password" className=" px-2 w-full outline-none border border-gray-400 rounded-md p-1" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <button className="w-full outline-none rounded-md bg-primary p-2 text-white" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    )
}

MainLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}
