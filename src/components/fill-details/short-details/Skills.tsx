import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Skills: React.FC = () => {
  const length = useAppSelector(({ resume }) => resume.skills.data.length);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='SKILLS' section='skills' />
      {new Array(length).map((_, index) => (
        <ShortDetail placeholder='skill' section='skills' id={index} />
      ))}
    </div>
  );
};

export default Skills;
