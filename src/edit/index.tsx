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
import Reference from './short-details/References';
import Skills from './short-details/Skills';
import Volunteers from './long-details/Volunteers';
import Achievements from './medium-details/Achievements';
import Skewed from '../customs/Skewed.polymorphic';

const FillDetails = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <div className='py-8 px-14'>
      <h1 className='text-2xl mb-5 font-thin capitalize text-center'>
        <Skewed as='span' content='Your resume details' />
      </h1>
      <div className='grid grid-cols-2 gap-x-12 gap-y-8'>
        <Profile />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Interests />
        <Publications />
        <Achievements />
        <Awards />
        <Reference />
        <Volunteers />
        <Organizations />
      </div>
    </div>
  );
};

export default FillDetails;
