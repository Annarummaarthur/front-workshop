import './Accueil.css';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import BtnBase from "../../components/btn_base/btn_base";

function Accueil({user}) {
    const token = Cookies.get("token");
    const navigate = useNavigate();

    return (
        <main className="opoil-Accueil">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a efficitur enim, nec lobortis neque. Nulla at scelerisque dui. Integer bibendum iaculis justo quis dictum.    
                </div>
                {token ? (
                    <>
                        {user && user.role === 'ROLE_USER' ? 
                            <BtnBase nav='/demandes/list' name='Voir mes demandes' /> 
                        : null}

                        {user && user.role === 'ROLE_VETO' ? 
                            <BtnBase nav='/posts' name='Voir les demandes' />
                        : null}
                    </>
                ) : (
                    <BtnBase nav='/inscription' name='Inscription' />
                )}
            </div>
        </main>
    );
}

export default Accueil;
