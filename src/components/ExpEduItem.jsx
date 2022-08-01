import React from 'react';

export const ExpEduItem = ({ companyName, jobPos, time, desc }) => (
  <div className='w-[225px] h-[275px] p-2 flex flex-col justify-start align-middle text-center bg-gradient-to-l md:bg-gradient-to-t from-base-dark shrink-0'>
    <h1>{companyName}</h1>
    <h2>{jobPos}</h2>
    <p>
      <small className='leading-3 mt-0'>{time}</small>
    </p>
    <p>{desc}</p>
  </div>
);
