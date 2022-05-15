import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Achievements: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.achievements.order);
  return (
    <div className='space-y-4'>
      <SectionHeading placeholder='ACHIEVEMENTS' section='achievements' />
      {order.map((id) => (
        <MediumDetail
          key={id}
          id={id}
          placeholder={{ primary: 'Achievement Name', desc: 'When Achieved' }}
          section='achievements'
        />
      ))}
    </div>
  );
};

export default Achievements;
