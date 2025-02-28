'use client';

import React from 'react';

type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <div className="border-0 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 bg-white">
      <img src={image} alt={name} className="w-24 h-24 mx-auto" />
      <h3 className="text-lg font-bold capitalize mt-2">{name}</h3>
      <div className="flex justify-center gap-2 mt-2">
        {types.map((type) => (
          <span key={type} className="px-2 py-1 bg-gray-200 rounded-md text-sm capitalize">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
