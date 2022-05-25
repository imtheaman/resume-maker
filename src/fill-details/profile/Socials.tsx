import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
  return (
    <div className='w-[60rem] bg-white h-[30rem] rounded-lg p-8'>
      <div>
        <FontAwesomeIcon icon={faGithub} width={60} height={60} />
        <input />
      </div>
    </div>
  );
};

export default Socials;
