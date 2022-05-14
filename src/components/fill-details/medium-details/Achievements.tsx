import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Achievements: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.achievements.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='ACHIEVEMENTS' section='achievements' />
      {order.map((id) => (
        <MediumDetail
        key={id}
          id={id}
          placeholder={{ primary: 'Achievement Name' }}
          section='achievements'
        />
      ))}
    </div>
  );
};

export default Achievements;
