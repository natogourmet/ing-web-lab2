import React from 'react';
import { Hex } from 'components/Hex';

export const Title = ({ title }) => (
  <div className='flex mt-4 my-4'>
    <Hex />
    <h1 className='ml-4 mt-2'>{title}</h1>
  </div>
);
