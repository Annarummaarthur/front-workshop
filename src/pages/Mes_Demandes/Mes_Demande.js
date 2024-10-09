import './Mes_Demande.css';

function Mes_Demande() {
    const demandes = [
        { date: '01/01/2024', veterinaire: 'Dr. Dupont', repondu: true },
        { date: '05/01/2024', veterinaire: 'Dr. Martin', repondu: false },
    ];

    const handleResponseClick = (veterinaire) => {
        alert(`Réponse pour ${veterinaire} traitée.`);
    };

    return (
        <main className="opoil-Mes-demandes">
            <div className='div-new-demande'>
                <h1>Mes demandes</h1>
                <button>Créer une demande</button>
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
                    {demandes.map((demande, index) => (
                        <tr key={index}>
                            <td>{demande.date}</td>
                            <td>{demande.veterinaire}</td>
                            <td>
                                {demande.repondu ? (
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span> // Croix rouge
                                ) : (
                                    <button>Modifier</button>
                                )}
                            </td>
                            <td>
                                {demande.repondu ? (
                                    <button onClick={() => handleResponseClick(demande.veterinaire)}>
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
