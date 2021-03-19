import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    // --Read route-perameter --//
    let {id} = useParams();

    const [user,setUser] =useState({});
    // --data loadd based on router-perameter (id) --//
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
           fetch(url)
           .then(response => response.json())
           .then(data => setUser(data));
    }, [])
    return (
        <div>
            <h3>User : {user.name}</h3>
            <h4>User Name: {user.username}</h4>
            <p>Phone: {user.phone}</p>
            <p>Details is Comming for id : {id}</p>

        </div>
    );
};

export default UserDetails;