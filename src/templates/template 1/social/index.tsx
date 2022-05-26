import {
  faGithub,
  faLinkedin,
  faMedium,
  faReddit,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import {
  faC,
  faEnvelope,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../../../store/store';

const Social = () => {
  const {
    connect,
    email,
    github,
    linkedin,
    medium,
    phone,
    reddit,
    stackoverflow
  } = useAppSelector(({ profile }) => profile.socials);
  return (
    <div className='px-12 py-6 grid grid-cols-4 border-b gap-y-6 text-xl'>
      {email && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faEnvelope} />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}
      {github && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faGithub} />
          <a href={`https://github.com/${github}`}>{github}</a>
        </div>
      )}
      {linkedin && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faLinkedin} />
          <a href={`https://linkedin.com/in/${linkedin}`}>
            {linkedin ? linkedin : 'linkedin'}
          </a>
        </div>
      )}
      {stackoverflow && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faStackOverflow} />
          <a href={`https://stackoverflow.com/${stackoverflow}`}>
            {stackoverflow ? stackoverflow : 'stackoverflow'}
          </a>
        </div>
      )}
      {medium && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faMedium} />
          <a href={`https://medium.com/@${medium}`}>
            {medium ? medium : 'medium'}
          </a>
        </div>
      )}
      {reddit && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faReddit} />
          <a href={`https://reddit.com/user/${reddit}`}>
            {reddit ? reddit : 'reddit'}
          </a>
        </div>
      )}
      {connect && (
        <div className='flex items-center '>
          <FontAwesomeIcon className='w-6 h-6 mr-2' icon={faC} />
          <a href={`https://connect-urtheaman.vercel.app/${connect}`}>
            {connect ? connect : 'connect'}
          </a>
        </div>
      )}
      {phone && (
        <div className='flex items-center '>
          <FontAwesomeIcon
            className='w-6 h-6 mr-2'
            icon={faMobileScreenButton}
          />
          <a href={`tel:${phone}`}>{phone ? phone : 'phone'}</a>
        </div>
      )}
    </div>
  );
};

export default Social;
