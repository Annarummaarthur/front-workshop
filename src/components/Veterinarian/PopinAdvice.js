import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PopinAdvice({ isOpen, onClose, onSubmit }) {
    const [advice, setAdvice] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(advice);
        setAdvice('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 max-w-full">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}><i
                    className="fas fa-times m-1"></i></button>
                <h2 className="text-xl font-semibold mb-4">Donner un avis</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={advice}
                        onChange={(e) => setAdvice(e.target.value)}
                        placeholder="Écrire votre avis ici..."
                        required
                        className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
                    />
                    <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-400">Soumettre</button>
                </form>
            </div>
        </div>
    );
}

PopinAdvice.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default PopinAdvice;