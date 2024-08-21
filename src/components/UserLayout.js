import React, { useState, useEffect } from "react";
import axios from 'axios';

import './UserLayout.css';

export default function UserLayout() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
          .then(response => setUsers(response.data));
      }, [users.length]);

    return (
        <div>
            {users.map((user) => (
                <div className="user-border">
                    <p>{user.name}</p>
                    <p>{user.description}</p>
                </div>
            ))}
        </div>
    )
}