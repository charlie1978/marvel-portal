/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import { getInverseCharactersForGrid } from '@/modules/marvel-characters/services';
import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import TotalResults from 'src/modules/core/components/atoms/TotalResults';
import SerieFilter from 'src/modules/core/components/molecules/SerieFilter';
//import SeparateNameAlias from './SeparateNameAlias';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

const currentDate = new Date().toDateString();

CharacterGridPaginated.propTypes = {
  option: PropTypes.number
};

export default function CharacterGridPaginated({ 
  option
}) {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [queryParams, setQueryParams] = useState({});

  const order = {
     orderBy: '-name'
  };

   useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  // async function fetchCharactersAtPage(page = 1) {
    
  //   setLoading(true);
  //     const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
  //     setTotalItems(data.total);
  //     setCharacters(data.results);
  //     setLoading(false);
    
  // }

  async function fetchCharactersAtPage(page = 1 ) {

     if (option == 1){
       setLoading(true);
       const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
       setTotalItems(data.total);
       setCharacters(data.results);
       setLoading(false);
     } 
  
     if(option == 2){
       setLoading(true);
       const data = await getInverseCharactersForGrid(page, ITEMS_PER_PAGE, order);
       setTotalItems(data.total);
       setCharacters(data.results);
       setLoading(false);
     }
   }

  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  // const onQueryChange = (query) => {
  //   setQueryParams(query);
  // };

  return (
    <>
      <TotalResults totalItems={totalItems} />
      {/* <Filter query={queryParams} onQueryChange={onQueryChange} /> */}
      <SerieFilter />
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
          order= {order}
      />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterGrid({ characters, isLoading, itemsPerPage }) {
  let prueba='';
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name, image }, index) => (
    <CharacterCard
      name={name.split(/[(]|[)]/)[0]}
      image={image}
      key={index}
      currentDate={currentDate}
      alias= {name.split(/[(]|[)]/)[1]}
      isSkeleton={isLoading}
    />
  ));
}

export const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} currentDate={currentDate} isSkeleton />);
};