import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PopinAdvice from '../Veterinarian/PopinAdvice';
import axios from 'axios';
import { environment } from '../../environment';
import Cookies from 'js-cookie';

function SquareCard({ id, title, description, user, finished, advice }) {
    const [isPopinOpen, setIsPopinOpen] = useState(false);
    const token = Cookies.get('token');

    const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;

    const handleOpenPopin = () => {
        setIsPopinOpen(true);
    };

    const handleClosePopin = () => {
        setIsPopinOpen(false);
    };

    const handleSubmitAdvice = async (advice) => {
        try {
            // créer l'advice
            const response = await axios.post(`${environment.apiUrl}advices/upload`, { comment: advice, doctorId : user.id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            await axios.put(`${environment.apiUrl}posts/update/${id}`, { advice_id : response.data.id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (error) {
            console.error("Erreur lors de la soumission de l'avis", error);
        }
    };

    return (
        <div className="relative p-4 m-4 w-72 h-72 shadow-xl rounded-lg border border-transparent hover:border-emerald-400 transition-all">
            <h2 className="text-xl text-center font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 break-words">{truncatedDescription}</p>
            {!finished ?
                <>
                    <button
                        onClick={handleOpenPopin}
                        className="absolute bottom-4 transition-all right-4 bg-emerald-500 hover:bg-emerald-400 hover:scale-105 text-white font-bold py-2 px-4 rounded">
                        Donner un avis
                    </button>
                    <PopinAdvice
                        advice={null}
                        isOpen={isPopinOpen}
                        onClose={handleClosePopin}
                        onSubmit={handleSubmitAdvice}
                    />
                </>
                :
                <>
                    {advice ?
                        <>
                            <button
                                onClick={handleOpenPopin}
                                className="absolute bottom-4 transition-all right-4 bg-emerald-500 hover:bg-emerald-400 hover:scale-105 text-white font-bold py-2 px-4 rounded">
                                Modifier l'avis
                            </button>
                            <PopinAdvice
                                advice={advice}
                                isOpen={isPopinOpen}
                                onClose={handleClosePopin}
                                onSubmit={handleSubmitAdvice}
                            />
                        </>

                        :
                        <div className="absolute bottom-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
                            Avis non donné
                        </div>
                    }
                </>
            }
        </div>
    );
}

SquareCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SquareCard;