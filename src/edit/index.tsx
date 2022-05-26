import layoutElement from '../../hooks/useLayout';
import { useAppSelector } from '../../store/store';
import Skewed from '../customs/Skewed.polymorphic';
import Profile from './profile/Profile';

const FillDetails = () => {
  const layout = useAppSelector(({ styles }) => styles.layout);
  return (
    <div className='py-8 px-14'>
      <h1 className='text-2xl mb-5 font-thin capitalize text-center'>
        <Skewed as='span' content='Your resume details' />
      </h1>
      <div className='grid grid-cols-2 gap-x-12 gap-y-8'>
        <Profile />
        <>{layout.map((el) => layoutElement(el))}</>
      </div>
    </div>
  );
};

export default FillDetails;
