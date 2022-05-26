import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../../store/store';
import Experience from './long-detail/Experience';
import Profile from './profile';
import Social from './social';

const Template1 = () => {
  const [
    { intro, socials, name, profilePic },
    {
      achievements,
      awards,
      educations,
      experiences,
      interests,
      languages,
      organizations,
      projects,
      publications,
      references,
      skills,
      volunteers
    }
  ] = useAppSelector(({ resume, profile }) => [profile, resume]);
  const {
    connect,
    email,
    github,
    linkedin,
    medium,
    phone,
    reddit,
    stackoverflow
  } = socials;
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
