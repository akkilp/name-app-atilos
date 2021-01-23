/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import TopContainer from '../components/InputContainer';
import NameList from '../components/NameList';
import SearchBox from '../components/SearchBox';
import { useApi } from '../hooks/useApi';
import { useSearchAndFilter } from '../hooks/useSearchAndFilter';
import { Name, SortBy } from '../types';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainPageProps {}

const mapResults = ({ data }: any) => {
  return data.map(({ name, amount }: Name) => ({
    name,
    amount,
  }));
};

const MainPage: React.FC<MainPageProps> = () => {
  const { data, isLoading, error } = useApi('http://localhost:5000/names', mapResults);
  const { result, search, setFilter, handleSearch, currentFilter } = useSearchAndFilter(data, isLoading, SortBy.AMOUNT_LARGEST_FIRST);

  return (
    <>
      <TopContainer>
        <SearchBox handleChange={handleSearch} searchTerm={search} />
        <Filter setFilter={setFilter} currentFilter={currentFilter} />
      </TopContainer>
      <NameList nameList={result} isLoading={isLoading} error={error} />
    </>
  );
};

export default MainPage;
