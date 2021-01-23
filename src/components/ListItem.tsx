import React from 'react';
import { Name } from '../types';
import { useHistory } from 'react-router-dom';

interface ListItemProps {
  item: Name;
  color: 'primary' | 'secondary';
}

const ListItem: React.FC<ListItemProps> = ({ color, item }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/names/${item.name}`);
  }

  const bgColor = color === 'primary' ? 'bg-gray-100' : 'bg-white';

  return (
    <tr className='cursor-pointer transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105' onClick={handleClick}>
      <td className={`p-4 ${bgColor} pl-6 capitalize`}>{item.name}</td>
      <td className={`p-4 ${bgColor} flex justify-center`}>{item.amount}</td>
    </tr>
  );
};

export default ListItem;
