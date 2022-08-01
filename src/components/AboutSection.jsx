import React from 'react';
import { Hex } from 'components/Hex';

export const Section = ({ title }) => (
  <div className='flex mt-4 mx-[8.3%] my-4'>
    <Hex />
    <div className='flex flex-col mt-2'>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aliquam accusamus similique veniam assumenda obcaecati esse consequuntur
        provident magni voluptate libero sunt in, deleniti quidem, tempora
        cupiditate facere laboriosam molestias!
      </p>
    </div>
  </div>
);
