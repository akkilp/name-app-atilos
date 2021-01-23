import React, { useState, useEffect } from "react";

import { Name, SortBy } from "../types";

const amountSmallestFirst = (a, b) => {
  return a.amount - b.amount;
};

const amountLargestFirst = (a, b) => {
  return b.amount - a.amount;
};

const alphabeticallySorted = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const alphabeticallySortedReverse = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};

const useSearchAndFilter = (
  data: Name[],
  isLoading: boolean,
  sortBy: SortBy
) => {
  const [search, setSearch] = useState<string>("");
  const [currentFilter, setFilter] = useState<SortBy>(sortBy);
  const [result, setResult] = useState<Name[] | []>([]);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };

  const selectSorting = (sortBy = SortBy.AMOUNT_LARGEST_FIRST) => {
    switch (sortBy) {
      case "AMOUNT_SMALLEST_FIRST":
        return amountSmallestFirst;
      case "AMOUNT_LARGEST_FIRST":
        return amountLargestFirst;
      case "ALPHABETICALLY_SORTED":
        return alphabeticallySorted;
      case "ALPHABETICALLY_SORTED_REVERSE":
        return alphabeticallySortedReverse;
      default:
        return amountLargestFirst;
    }
  };

  const applySearchAndFilter = (
    data: any,
    sortBy = SortBy.AMOUNT_LARGEST_FIRST
  ) => {
    if (!data) return null;
    let results;
    if (search !== "") {
      results = data.filter(({ name }: Name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    }
    const isNumber = parseInt(search);
    if (isNumber) {
      results = data.filter(({ amount }: Name) => amount === isNumber);
    }

    // If data is passed directly, it causes a bug in filtering
    if (!results) {
      results = [...data];
    }
    results.sort(selectSorting(sortBy));
    setResult(results);
  };

  useEffect(() => {
    applySearchAndFilter(data, currentFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, search, currentFilter]);

  return { result, search, setFilter, handleSearch, currentFilter };
};

export { useSearchAndFilter };
