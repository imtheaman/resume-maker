import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Interests: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.interests.order);
  return (
    <div>
      <SectionHeading placeholder='INTERESTS' section='interests' />
      <div className='flex flex-wrap'>
        {order.map((id) => (
          <ShortDetail
            key={id}
            style={'short-section-border'}
            placeholder='interest'
            section='interests'
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Interests;
