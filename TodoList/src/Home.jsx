import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Style.css';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    console.log("you press the delete button");
    dispatch(deleteUser({id:id}));
  };
  function handleClickSubmit(){
    navigate('/Register', { replace: true });
  }
  return (
    <div className="table-wrapper">
      <Link to="/create" className="btn">
        Create +
      </Link>
      <table className="fl-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="bttn">
                  Edit
                </Link>
                <button onClick={() => handleDelete(user.id)} className="bttn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleClickSubmit()}>
    Sign up
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
    </div>
  );
}

export default Home;
