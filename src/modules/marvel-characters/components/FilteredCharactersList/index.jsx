/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFilteredCharactersForList } from '@/modules/marvel-characters/services';
import CharacterItem from '../../../core/components/atoms/CharacterItem';

import './styles.scss';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 5;

export default function FilteredCharacterListPaginated({ searchValue }) {
  console.log('La búsqueda empieza con: ' + searchValue);
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
//  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  async function fetchCharactersAtPage(page = 1) {
    let letters = {
      nameStartsWith: searchValue
    };

    console.log('el nameStartsWith es: ' + letters.nameStartsWith);

    setLoading(true);
    const data = await getFilteredCharactersForList(page, ITEMS_PER_PAGE, letters);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
    console.log('Total Personajes: ', data.total);
  }

  return (
    <>
      <div className="filtered_characters_list">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
    </>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterList({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterListSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name }, index) => (
    <CharacterItem name={name} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterListSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterItem key={value} isSkeleton />);
};
