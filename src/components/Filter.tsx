'use client';

import React from 'react';

type FilterProps = {
  types: string[];
  selectedTypes: string[];
  onToggleType: (type: string) => void;
  onClearFilters: () => void;
};

const Filter: React.FC<FilterProps> = ({ types, selectedTypes, onToggleType, onClearFilters }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">Filter by type</h3>
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onToggleType(type)}
            className={`px-3 py-1 rounded-md text-sm capitalize flex items-center gap-1 ${selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {type}
            {selectedTypes.includes(type) && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleType(type);
                }}
                className="ml-1 text-lg"
              >
                ❌
              </span>
            )}
          </button>
        ))}
      </div>
      {selectedTypes.length > 0 && (
        <button onClick={onClearFilters} className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md">
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default Filter;
