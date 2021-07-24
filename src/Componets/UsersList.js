import React, { useEffect, useState } from 'react';
import './UsersList.css';
import axios from 'axios';

const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {

        axios.get('https://netlify-backend.netlify.app/')
            .then(res => {
                setUsers(res.data);
            }).catch(err => {
                console.log(err);
            })
    }

    let useritem;

    if (users) {
        useritem = users.map((i, k) => {
            return (
                <div className="item-div center" key={k}>
                    <table className="mytable">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{i.id}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{i.name}</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>{i.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        });
    }


    return (
        <div>
            {useritem}
        </div>
    );

}

export default UsersList;
