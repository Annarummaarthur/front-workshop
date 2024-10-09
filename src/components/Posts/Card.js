import React from 'react';
import PropTypes from 'prop-types';

function SquareCard({ title, description }) {
    const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;

    return (
        <div className="relative p-4 m-4 w-72 h-72 shadow-xl rounded-lg border border-transparent hover:border-emerald-400 transition-all">
            <h2 className="text-xl text-center font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 break-words">{truncatedDescription}</p>
            <button
                className="absolute bottom-4 transition-all right-4 bg-emerald-500 hover:bg-emerald-400 hover:scale-105 text-white font-bold py-2 px-4 rounded">
                Donner un avis
            </button>
        </div>
    );
}

SquareCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SquareCard;