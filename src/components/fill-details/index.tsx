import { useAppDispatch, useAppSelector } from '../../store/store';
import Awards from './medium-details/Awards';
import Education from './long-details/Education';
import Experience from './long-details/Experience';
import Interests from './short-details/Interests';
import Languages from './short-details/Languages';
import Organizations from './long-details/Organizations';
import Profile from './profile/Profile';
import Projects from './long-details/Projects';
import Publications from './medium-details/Publications';
import Reference from './short-details/Reference';
import Skills from './short-details/Skills';
import Volunteers from './long-details/Volunteers';
import { setShowTools } from '../../store/ui/uiSlice';

const FillDetails = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <div
      className='py-8 px-12'
      onFocus={() => {
        dispatch(setShowTools(true));
      }}
      onBlur={() => {
        setTimeout(() => dispatch(setShowTools(false)), 500);
      }}
    >
      <h1 className='text-2xl mb-12 font-thin capitalize text-center'>
        <span
          className={`-skew-x-12 inline-block text-white py-1 px-4 ${theme}`}
        >
          <span className='inline-block skew-x-12'>Your resume details</span>
        </span>
      </h1>
      <div className='grid grid-cols-2 gap-10'>
        <Profile />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Interests />
        <Publications />
        <Awards />
        <Reference />
        <Volunteers />
        <Organizations />
      </div>
    </div>
  );
};

export default FillDetails;
