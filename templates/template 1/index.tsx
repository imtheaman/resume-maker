import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../store/store';
import Experience from './long-detail/Experience';
import Profile from './profile';
import Social from './social';

const Template1 = () => {
  return (
    <div>
      <Profile />
      <Social />
      <div className='p-12'>
        <Experience />
      </div>
    </div>
  );
};

export default Template1;
