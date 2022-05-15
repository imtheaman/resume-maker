import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Skills: React.FC = () => {
  const data = useAppSelector(({ resume }) => resume.skills.data);
  return (
    <div>
      <SectionHeading placeholder='SKILLS' section='skills' />
      <div className='flex flex-wrap'>
        {data.map((_, index) => (
          <ShortDetail
            key={index}
            style={'short-section-fill-light'}
            placeholder='skill'
            section='skills'
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
