'use client';

import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonTypes } from '@/services/api';
import PokemonCard from '@/components/PokemonCard';
import Pagination from '@/components/Pagination'; // We can create a barrel file to improve and simplify imports.
import Filter from '@/components/Filter'; // We can create a barrel file to improve and simplify imports.

const ITEMS_PER_PAGE = 20;

const HomePage = () => {
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPokemonList(0, 1000).then((data) => {
      setAllPokemon(data.pokemonList);
      setFilteredPokemon(data.pokemonList);
      setLoading(false);
    });
    getPokemonTypes().then(setTypes);
  }, []);

  useEffect(() => {
    if (selectedTypes.length > 0) {
      const filtered = allPokemon.filter((p) => p.types.some((type: string) => selectedTypes.includes(type)));
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon(allPokemon);
    }
    setCurrentPage(1);
  }, [selectedTypes, allPokemon]);

  const totalPages = Math.ceil(filteredPokemon.length / ITEMS_PER_PAGE);
  const displayedPokemon = filteredPokemon.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleToggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  const handleClearFilters = () => {
    setSelectedTypes([]);
  };

  if (loading) return <p className="text-center text-lg font-semibold mt-4">Cargando...</p>;

  return (
    <div className="p-5 md:p-7 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <Filter types={types} selectedTypes={selectedTypes} onToggleType={handleToggleType} onClearFilters={handleClearFilters} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {displayedPokemon.map((p) => (
          <PokemonCard key={p.id} {...p} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 w-full flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
