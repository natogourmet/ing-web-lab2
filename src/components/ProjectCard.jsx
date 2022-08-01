import React from 'react';

export const ProjectCard = ({ icon, projectName, projectContent, desc }) => (
  <div className='w-[345px] h-[500px] p-5 flex flex-col shrink-0 justify-start align-middle justify-items-center items-center text-center bg-gradient-to-t from-base-black to-base-dark card-shadow shadow-base-light'>
    <div className='card-hexagon bg-base-black'>{icon}</div>
    <h1>{projectName}</h1>
    <h2>{projectContent}</h2>
    <p>{desc}</p>
  </div>
);
