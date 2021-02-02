import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Graphs from '../components/Graphs';

function Search() {
    const [users, setUsers] = useState([]); 
    const [search, setSearch] = useState(''); 
    const [filterUsers, setFilterUsers] = useState([]); 

    // useEffect(() => {
    //     let userlist = []; 
    //     db.ref("users").on("value", snapshot => {
    //         snapshot.forEach(snap => {
    //             userlist.push(snap.val()); 
    //         });
    //     });

    //     setUsers(userlist); 
    // }, []);

    useEffect(() => {
        setFilterUsers(
            users.filter( user => {
                return user.title.toLowerCase().includes(search.toLowerCase()) || user.description.toLowerCase().includes(search.toLowerCase()); 
            })
        )
    }, [search, users]);

    return (
        <div>
            <Form inline>
                <FormControl data-testid='Search' type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} className="mr-sm-2" />
            </Form> 
            {
                users.length === 0 ? (
                    <Graphs />
                ) : (
                    filterUsers.map(user => (
                        <Graphs graph={user} />
                    ))
                )
            }
        </div>
    )
}

export default Search; 