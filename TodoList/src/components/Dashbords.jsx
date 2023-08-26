import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashbords.css'
const Dashboards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem("adminToken");

    // Function to fetch user data from the backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/admin/users', {
          headers: {
            Authorization: authToken, // Replace with your admin token received from backend login
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users Information</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.scores}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboards;


<h1>The counter is: 5</h1>