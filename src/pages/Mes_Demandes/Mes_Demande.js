import './Mes_Demande.css';
import BtnBase from "../../components/btn_base/btn_base";
import Cookies from "js-cookie";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';

function Mes_Demande() {
    const [posts, setPosts] = useState([]);
    const token = Cookies.get("token");
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.post(`${environment.apiUrl}auth/profile`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setUser(response.data);
        });
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${environment.apiUrl}posts/allPosts`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [token]);

    const handleResponseClick = (veterinaire) => {
        alert(`Réponse pour ${veterinaire} traitée.`);
    };

    return (
        <main className="opoil-Mes-demandes">
            <div className='div-new-demande'>
                <h1>Mes demandes</h1>
                <BtnBase nav='/demandes/create' name='Créer une demande' />
            </div>
            
            <table className="demande-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vétérinaire</th>
                        <th>Modifier</th>
                        <th>Réponse</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.created_at}</td>
                            <td>{post.title}</td>
                            <td>
                                {post.repondu ? (
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span> // Croix rouge
                                ) : (
                                    <button>Modifier</button>
                                )}
                            </td>
                            <td>
                                {post.repondu ? (
                                    <button onClick={() => handleResponseClick(post.veterinaire)}>
                                        Répondu
                                    </button>
                                ) : (
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default Mes_Demande;
