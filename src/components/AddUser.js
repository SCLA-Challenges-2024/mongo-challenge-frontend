import React, { useState } from "react";
import axios from 'axios';

export default function AddUser() {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const addUser = () => {
        axios.post('http://localhost:8000/api/users/', { name: newName, description: newDescription });
        setNewName('');
        setNewDescription('');
    }

    return (
        <div>
            <input 
                name="name" type="text" placeholder="Enter Name" required
                onChange={(e) => setNewName(e.target.value)}
            />
            <input 
                name="name" type="text" placeholder="Enter Description" required
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}