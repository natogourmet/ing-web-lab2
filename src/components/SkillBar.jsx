import React from 'react';

export const SkillBar = ({ skillName, percentage }) => (
  <div className='flex flex-col w-[80%] md:w-[40%]'>
    <h2>{skillName}</h2>
    <div className='flex align-middle items-center'>
      <div className='h-[10px] w-full bg-base-dark-grey mr-3'>
        <div
          className='h-[10px] bg-gradient-to-r from-base-dark to-base-light'
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span>{percentage}%</span>
    </div>
  </div>
);
