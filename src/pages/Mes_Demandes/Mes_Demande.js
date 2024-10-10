import './Mes_Demande.css';
import BtnBase from "../../components/btn_base/btn_base";
import Cookies from "js-cookie";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';
import { format} from 'date-fns'

function Mes_Demande({user}) {
    const [posts, setPosts] = useState([]);
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.post(`${environment.apiUrl}posts/allPostsByUser`, {
                    user_id: user.id
                },{
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
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Modification</th>
                        <th>Réponse</th>
                        <th>Avis</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{format(new Date(post.createdAt), 'd/M/Y')}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>
                                {post.adviceId ? (
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span>
                                ) : (
                                    <button>Modifier</button>
                                )}
                            </td>
                            <td>
                                {post.adviceId ? (
                                    <button onClick={() => handleResponseClick(post.veterinaire)}>
                                        Répondu
                                    </button>
                                ) : (
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span>
                                )}
                            </td>
                            <td>
                                {post.advice ?
                                    <p>{post.advice.comment}</p>
                                    :
                                    null
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default Mes_Demande;
