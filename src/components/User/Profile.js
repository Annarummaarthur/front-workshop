import React, { useState, useEffect } from 'react';
import { environment } from "../../environment";
import axios from "axios";
import Cookies from "js-cookie";

function Profile() {
    const [user, setUser] = useState(null);
    const [, setLoading] = useState(true);
    const token = Cookies.get("token");

    useEffect(() => {
        axios.post(`${environment.apiUrl}auth/profile`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setUser(response.data);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        });
    }, [token]);

    if (!user) {
        return <p>Vous n'êtes pas connecté.</p>;
    }

    return (
        <main className="pt-28 flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-6">Profil</h1>
            <div className="w-full max-w-md">
                <div className="form-group mb-4">
                    <label className="block text-gray-700">Prénom:</label>
                    <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{user.firstName}</p>
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700">Nom:</label>
                    <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{user.lastName}</p>
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700">Role:</label>
                    <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                        {user.role === 'ROLE_USER' ? 'Utilisateur' : 'Vétérinaire'}
                    </p>
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{user.email}</p>
                </div>
            </div>
        </main>
    );
}

export default Profile;