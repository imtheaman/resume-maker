import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Skills: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.skills.order);
  return (
    <div>
      <SectionHeading placeholder='SKILLS' section='skills' />
      <div className='flex flex-wrap'>
        {order.map((id) => (
          <ShortDetail
            key={id}
            style={'short-section-fill-light'}
            placeholder='skill'
            section='skills'
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
