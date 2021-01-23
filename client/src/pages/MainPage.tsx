import React from "react";
import Filter from "../components/Filter";
import TopContainer from "../components/InputContainer";
import NameList from "../components/NameList";
import SearchBox from "../components/SearchBox";
import { useApi } from "../hooks/useApi";
import { useSearchAndFilter } from "../hooks/useSearchAndFilter";
import { Name, SortBy } from "../types";

const mapResults = ({ data }: any) => {
  return data.map(({ id, name, amount }: Name) => ({
    id,
    name,
    amount,
  }));
};

const MainPage: React.FC = () => {
  const { data, isLoading, error } = useApi(
    "http://localhost:5001/names",
    mapResults
  );
  const {
    result,
    search,
    setFilter,
    handleSearch,
    currentFilter,
  } = useSearchAndFilter(data as any, isLoading, SortBy.AMOUNT_LARGEST_FIRST);

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
