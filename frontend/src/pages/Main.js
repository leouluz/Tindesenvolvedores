import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
//import tuliao from '../assets/tuliao.jpg';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        })
        setUsers(users.filter(user => user._id !== id));
    }
    async function handleDislike(id) {
        await api.post(`/devs/${id}/deslikes`, null, {
            headers: { user: match.params.id }
        })
        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="tindev"></img>
            </Link>
            {(users.length > 0 ?
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name}></img>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{(!user.bio) ? 'O cuck não tem a maldita biografia no git!' : user.bio}</p>
                            </footer>
                            <div className="buttons" >
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="dislike"></img>
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="like"></img>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                :
                <div className="empty">Sem usuarios no momento :(</div>)}

        </div>
    );
}