import React from 'react';
import { ReactComponent as SearchLogo } from '../assets/search.svg';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBoxProps {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleChange, searchTerm }) => {
  return (
    <div className='relative px-3 flex-grow bg-white border-2 border-gray-800 flex flex-row rounded-lg '>
      <SearchLogo className='w-6 fill-current text-gray-800 flex flex-nowrap' />
      <input
        className=' h-10 pl-3 font-medium flex-grow text-gray-800 rounded-lg text-m focus:outline-none'
        type='text'
        value={searchTerm}
        onChange={event => handleChange(event)}
      />
    </div>
  );
};

export default SearchBox;
