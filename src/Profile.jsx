import React from 'react'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from "@fortawesome/free-solid-svg-icons";

const LogIn = () => {
  return (
    <>
    <div className="logContainer">
      <img src="/profilepic.png" alt="PP" />
      <div className="logData">
        <h1>Maninder Singh <FontAwesomeIcon icon={faLock} /></h1>
        <p>manindersingh127</p>
        <p>0 following</p>
      </div>
      <div className="buttons">
        <button>Share</button>
        <button>Edit profile</button>
      </div>
      <div className="coloms">
        <h5 className='coloms1'>Created
        <div className="underline1"></div>
        </h5>
        <h5 className='coloms2'>Saved
        <div className="underline2"></div>
        </h5>
      </div>
      <p className='ppdata'>Nothing to show...yet! Pins you create will live here.</p>
      <button className='ppbtn'>Create Pin</button>
    </div>
    </>
  )
}

export default LogIn
