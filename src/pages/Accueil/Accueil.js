import './Accueil.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {environment} from "../../environment";
import {useNavigate} from "react-router-dom";

function Accueil() {
    const token = Cookies.get("token");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`${environment.apiUrl}auth/profile`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setUser(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    });

    return (
        <main className="opoil-Accueil">
            <div className='center-col'>
                {user ? <h1 className="text-4xl my-5">Bienvenue, {user.firstName}</h1> : <h1>Bienvenue sur O'Poil</h1>}
                <div className='div-img-Accueil'>
                    <img
                        src='https://www.veterinaire-monveto.com/wp-content/uploads/2023/11/TRAME-CLINIQUE-HEADER2-2.png'
                        alt="Image d'un vétérinaire avec un chien à ses côtés"
                    />
                </div>
            </div>
            <div className='center-col'>
                <div className='p-Accueil'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a efficitur enim, nec lobortis neque. Nulla at scelerisque dui. Integer bibendum iaculis justo quis dictum.    
                </div>
                { user ?
                    <>
                        {user.role === 'ROLE_USER' ? <button onClick={() => navigate('/demandes/list')} className="accueil">Voir mes demandes</button>
                            : <button onClick={() => navigate('/posts')} className="accueil">Voir les demandes</button>
                        }
                        </>

                    :
                    <button className="accueil">Inscription</button>
                }
            </div>
        </main>
    );
}

export default Accueil;
