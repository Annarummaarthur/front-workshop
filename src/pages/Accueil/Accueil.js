import './Accueil.css';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

function Accueil({user}) {
    const token = Cookies.get("token");
    const navigate = useNavigate();

    return (
        <main className="flex justify-center flex-col items-center">
            <div className='center-col'>
                {token && user ? <h1 className="text-4xl my-5">Bienvenue, {user.firstName}</h1> : <h1 className="text-4xl my-5">Bienvenue sur O'Poil</h1>}
                <div className='div-img-Accueil'>
                    <img
                        src='https://www.veterinaire-monveto.com/wp-content/uploads/2023/11/TRAME-CLINIQUE-HEADER2-2.png'
                        alt="Image d'un vétérinaire avec un chien à ses côtés"
                    />
                </div>
            </div>
            <div className='center-col'>
                <div className='p-Accueil'>
                O'Poil est là pour vous faciliter la tâche de la prise de rendez-vous à la consultation. 
                  
                </div>
                { token ?
                    <>
                        {user && user.role === 'ROLE_USER' ? <button onClick={() => navigate('/demandes/list')} className="accueil">Voir mes demandes</button>
                            : null
                        }
                        {user && user.role === 'ROLE_VETO' ? <button onClick={() => navigate('/posts')} className="accueil">Voir les demandes</button>
                            : null
                        }
                        </>

                    :

                    <button className="accueil" onClick={() => navigate('/inscription')}>Inscription</button>
                }
            </div>
        </main>
    );
}

export default Accueil;
