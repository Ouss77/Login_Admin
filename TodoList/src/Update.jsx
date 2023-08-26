import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { updateUser } from "./UserReducer";
function Update() {
  const { id } = useParams();

  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdate = (event) =>{
    event.preventDefault()
    dispatch(
        updateUser({
            id: id, 
            name: uname, 
            email: uemail}))
    // Handle form submission logic here
    navigate('/')
  }
  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={handleUpdate}>
          <h2>Add New User</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter name"
              value={uname}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              value={uemail}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
