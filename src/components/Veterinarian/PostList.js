import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../environment';
import Cookies from "js-cookie";
import SquareCard from "../Posts/Card";

function PostList() {
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
                const response = await axios.get(`${environment.apiUrl}posts/allPostsNoAdvice`, {
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

    return (
        <div className="flex flex-col w-100 items-start justify-center">
            <h1 className="text-4xl text-center w-[100vw] mt-3 font-semibold">Demandes à traiter</h1>
            <div className="flex flex-wrap justify-evenly">
                {posts.map(post => (
                    <SquareCard key={post.id} id={post.id.toString()} title={post.title} description={post.description} user={user}/>
                ))}
            </div>
        </div>
    );
}

export default PostList;