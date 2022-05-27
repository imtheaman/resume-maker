import {
  faGithub,
  faLinkedin,
  faMedium,
  faReddit,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowPointer,
  faEnvelope,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import {
  setEmail,
  setGithub,
  setLinkedin,
  setMedium,
  setPhone,
  setPortfolio,
  setReddit,
  setStackOverflow
} from '../../../store/profile';
import SocialItem from './SocialItem';

const Socials = () => {
  return (
    <div className='w-[60rem] bg-white h-[30rem] rounded-lg p-8'>
      <h3 className='text-center text-3xl'>Social Profiles</h3>
      <div className='w-full gap-y-5 grid grid-cols-2 p-12 gap-x-4 h-full'>
        <SocialItem
          icon={faGithub}
          placeholder='Github Username'
          social='github'
          dispatchEvent={setGithub}
        />
        <SocialItem
          icon={faLinkedin}
          placeholder='Linkedin Username'
          social='linkedin'
          dispatchEvent={setLinkedin}
        />
        <SocialItem
          icon={faStackOverflow}
          placeholder='StackOverflow Username'
          social='stackoverflow'
          dispatchEvent={setStackOverflow}
        />
        <SocialItem
          icon={faReddit}
          placeholder='Reddit Username'
          social='reddit'
          dispatchEvent={setReddit}
        />
        <SocialItem
          icon={faMedium}
          placeholder='Medium Username'
          social='medium'
          dispatchEvent={setMedium}
        />
        <SocialItem
          icon={faArrowPointer}
          placeholder='Portfolio Link'
          social='portfolio'
          dispatchEvent={setPortfolio}
        />
        <SocialItem
          icon={faEnvelope}
          placeholder='Email'
          social='email'
          dispatchEvent={setEmail}
        />
        <SocialItem
          icon={faMobileScreenButton}
          placeholder='Phone Number'
          social='phone'
          dispatchEvent={setPhone}
        />
      </div>
    </div>
  );
};

export default Socials;
