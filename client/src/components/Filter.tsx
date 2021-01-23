import React, { useState, useLayoutEffect } from "react";
import { ReactComponent as OpenIcon } from "../assets/open.svg";
import { SortBy } from "../types";
import Togglable from "./Togglable";

interface FilterProps {
  setFilter: (SortBy) => void;
  currentFilter: SortBy;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const [show, setShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<SortBy | null>(
    SortBy.AMOUNT_LARGEST_FIRST
  );

  useLayoutEffect(() => {
    setFilter(current);
    console.log(current);
    setShow(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleFilterChange = (value: SortBy) => {
    setCurrent(value);
  };

  return (
    // Relative parent needed for the togglable selection which is absolute
    <div className="relative">
      <div
        className="m-w-30 h-11 px-3 bg-gray-800 text-white flex rounded-lg justify-between items-center flex-nowrap space-x-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p className="flex-none">Filter by</p>
        <OpenIcon
          className={`w-3 fill-current transition duration-300 linear text-white ${
            show ? "arrowDown" : "arrowUp"
          }`}
        />
        <Togglable show={show}>
          <ul className="bg-gray-800 absolute text-gray-300 -h-full mt-6  w-full -m-5 z-10 rounded-lg sm:w-48 sm:-ml-28">
            <li
              className={`p-2  hover:text-white rounded-t-lg ${
                current === SortBy.AMOUNT_LARGEST_FIRST && "bg-gray-700"
              } `}
              onClick={() => handleFilterChange(SortBy.AMOUNT_LARGEST_FIRST)}
            >
              Highest amount first
            </li>
            <li
              className={`p-2 hover:text-white ${
                current === SortBy.AMOUNT_SMALLEST_FIRST && "bg-gray-700"
              }`}
              onClick={() => handleFilterChange(SortBy.AMOUNT_SMALLEST_FIRST)}
            >
              Lowest amount first
            </li>
            <li
              className={`p-2 hover:text-white ${
                current === SortBy.ALPHABETICALLY_SORTED && "bg-gray-700"
              }`}
              onClick={() => handleFilterChange(SortBy.ALPHABETICALLY_SORTED)}
            >
              Alphabetically sorted
            </li>
            <li
              className={`p-2 hover:text-white rounded-b-lg ${
                current === SortBy.ALPHABETICALLY_SORTED_REVERSE &&
                "bg-gray-700"
              }`}
              onClick={() =>
                handleFilterChange(SortBy.ALPHABETICALLY_SORTED_REVERSE)
              }
            >
              Alphabetically reversed
            </li>
          </ul>
        </Togglable>
      </div>
    </div>
  );
};

export default Filter;
