import Header from "./Header";
import Accueil from "./pages/Accueil/Accueil";
import {
    BrowserRouter as Router, Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Inscription from "./components/Auth/Inscription";
import Profile from "./components/User/Profile";
import Login from "./components/Auth/Login";
import Mes_Demande from "./pages/Mes_Demandes/Mes_Demande";
import PostList from "./components/Veterinarian/PostList";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {environment} from "./environment";

function App() {

    const token = Cookies.get("token");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.post(`${environment.apiUrl}auth/profile`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
                setLoading(false);
            })
        }
    }, [token]);

    return (
        <Router>
            {!loading ?
                <div className="reactor">
                    <Header user={user} />

                    <Routes>
                        <Route exact path="/" element={<Accueil user={user} />} />
                        <Route path="/inscription" element={<Inscription />} />
                        <Route path="/connexion" element={<Login />} />
                        <Route path="/compte" element={<PrivateRoute element={<Profile />} />} />
                        <Route path="/demandes/list" element={user && user.role === 'ROLE_USER' ? <PrivateRoute element={<Mes_Demande />} /> : <Navigate to="/" />} />
                        <Route exact path="/posts" element={user && user.role === 'ROLE_VETO' ? <PrivateRoute element={<PostList user={user} finished={false}/>} /> : <Navigate to='/'/>} />
                        <Route exact path="/advices" element={user && user.role === 'ROLE_VETO' ? <PrivateRoute element={<PostList user={user} finished={true}/>} /> : <Navigate to='/'/>} />
                    </Routes>
                </div>
                :
                null
            }
        </Router>
    );
}

export default App;