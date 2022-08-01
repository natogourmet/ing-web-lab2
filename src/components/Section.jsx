import React from 'react';
import { Title } from 'components/Title';

export const Section = ({ title, children }) => (
  <div className='flex flex-col mt-2  mx-[8.3%] mb-20'>
    <Title title={title} />
    {children}
  </div>
);
