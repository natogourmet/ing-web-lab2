import React from 'react';

export const LandingSection = ({ name, title, mail, imageUrl }) => (
  <div className='h-screen bg-gradient-to-b to-base-black from-base-dark text-base-white'>
    <div className='flex flex-col text-center justify-center gap-2 h-full'>
      <div className='hexagon-border bg-base-light mx-auto my-5'>
        <div className='hexagon'>
          <img className='m-auto' src={imageUrl} alt='' />
        </div>
      </div>
      <h1>{name}</h1>
      <p>{title}</p>
      <p className='text-xs underline'>{mail}</p>
    </div>
  </div>
);
