import React from 'react';
import { Name } from '../types';

import Loading from './Loading';
import Error from './Error';
import InfoBox from './InfoBox';

interface InfoGridProps {
  data: Name | undefined;
  isLoading: boolean;
  error: any;
}

// Helper function to capitalize words, which cannot be applied through tailwinds capitalize
const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const InfoList: React.FC<InfoGridProps> = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='flex flex-wrap'>
      <InfoBox top='There are' center={data?.amount} bottom={`persons named ${capitalize(data?.name as string)} working in Solita`} />
      <InfoBox top={`${capitalize(data?.name as string)} is the`} center='3rd / 24' bottom={`most popular name in Solita`} />
    </div>
  );
};

export default InfoList;
