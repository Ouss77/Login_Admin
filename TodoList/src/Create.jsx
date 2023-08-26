import React, { useState } from 'react'
import './Style.css'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addUser({id: parseInt(users[users.length - 1].id) + 1, 
                name, 
                email}))
        // Handle form submission logic here
        navigate('/')
      };
  return (
    <div>
            <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 >Create New User</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='enter name' onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='enter email' onChange={e => setEmail(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>;
    </div>
  )
}

export default Create