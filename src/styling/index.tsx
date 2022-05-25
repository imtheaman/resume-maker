import Skewed from '../customs/Skewed.polymorphic';

const Styles = () => {
  return (
    <div className='w-[60rem] bg-white h-[30rem] rounded-lg space-y-5 p-8 flex flex-col items-center'>
      <h2 className='text-3xl'>Styles</h2>
      <div className='max-w-sm w-full flex  justify-between'>
        {/* <Skewed as='span'>List Style</Skewed> */}
        <ul className='flex justify-center  items-center'>
          <li className='list-style-square-border'></li>
          <li className='list-style-circle-border'></li>
          <li className='list-style-square-border'></li>
          <li className='list-style-square-border'></li>
        </ul>
      </div>
    </div>
  );
};

export default Styles;
