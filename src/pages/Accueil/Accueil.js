import './Accueil.css';

function Accueil() {
    const User = 'Arthur';
    return (
        <main className="opoil-Accueil">
            <div className='center-col'>
                <h1>Bienvenue, {User}</h1>
                <div className='div-img-Accueil'>
                    <img src='https://www.veterinaire-monveto.com/wp-content/uploads/2023/11/TRAME-CLINIQUE-HEADER2-2.png' alt="Image d'un vétérinaire avec un chien à ses côtés" />
                </div>
            </div>
            <div className='center-col'>
                <div className='p-Accueil'>
                O'Poil est là pour vous faciliter la tâche de la prise de rendez-vous à la consultation. 
                  
                </div>
                <div>
                    <button>Demande de rendez-vous</button>
                </div>
            </div>
        </main>
    );
}

export default Accueil;
