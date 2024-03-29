import React from "react";
import {useContext, useState} from 'react'
import {AuthContext} from '../AuthContext'

function SignUp () {

    const { register } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        register(email, password, firstName, lastName, phoneNumber)
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 ">
            <div className="flex flex-col items-center justify-center bg-white h-96 rounded-lg shadow-2xl w-1/3 mb-2">
                <h1 className="text-4xl mt-5 font-bold">Sign Up</h1>
                <p className="text-gray-500">Create an account</p>
                <form onSubmit={handleSubmit}className="flex flex-col items-center justify-center w-96 h-96">
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)}type="text" placeholder="First Name" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5 mx-2"></input>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="text" placeholder="Last Name" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5 mx-2"></input>
                    <input value={email}onChange={(e) => setEmail(e.target.value)}type="text" placeholder="Email" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}type="text" placeholder="Phone Number" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}type="text" placeholder="Password" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                    <button className="px-9 py-3 mb-2 text-lg text-white bg-black rounded-full shadow-md hover:bg-gray-900">
                     Sign Up
                </button>
             
                </form>
            </div>
        </div>

    )
}

export default SignUp;