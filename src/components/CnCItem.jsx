import React from 'react';

export const CnCItem = ({ icon, cName }) => (
  <div className='w-[220px] p-5 flex flex-col shrink-0 justify-start align-middle justify-items-center items-center text-center'>
    <div className='course-hexagon w-[220px] h-[260px] bg-gradient-to-t from-base-dark to-base-light mb-5'>
      {icon}
    </div>
    <h1>{cName}</h1>
  </div>
);
