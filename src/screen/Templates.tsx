import React from 'react';
import Skewed from '../customs/Skewed.polymorphic';

const Templates = () => {
  return (
    <div className='p-12'>
      <h1 className='text-2xl mb-6 text-center'>Templates</h1>
      <div className='grid grid-cols-3 gap-x-6 w-full'>
        <div className='flex items-center justify-center h-[30rem] aspect-[1/1.414] bg-gray-100'>
          <img src='' alt='Image not available' />
        </div>
        <div className='flex items-center justify-center h-[30rem] aspect-[1/1.414] bg-gray-100'>
          <img src='' alt='Image not available' />
        </div>
        <div className='flex items-center justify-center h-[30rem] aspect-[1/1.414] bg-gray-100'>
          <img src='' alt='Image not available' />
        </div>
      </div>
      <div className='flex items-center mt-12 justify-center text-gray-600 hover:text-gray-800'>
        <Skewed customBg className='border' as='span'>
          contribute (with react/css) to add more template styles
        </Skewed>
        <Skewed
          as='a'
          // @ts-ignore
          // todo : make polymorphic more robust
          href='https://github.com/urtheaman/resume-maker'
          className='border-b italic ml-2'
        >
          fork on github
        </Skewed>
      </div>
    </div>
  );
};

export default Templates;
