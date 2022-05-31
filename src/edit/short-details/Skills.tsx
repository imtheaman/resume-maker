import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Skills: React.FC = () => {
  const [order, style] = useAppSelector(({ resume, styles }) => [
    resume.skills.order,
    styles.skillStyle
  ]);
  return (
    <div>
      <SectionHeading placeholder='SKILLS' section='skills' />
      <div className='flex flex-wrap'>
        {order.map((id) => (
          <ShortDetail
            key={id}
            style={style}
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
