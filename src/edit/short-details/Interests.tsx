import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Interests: React.FC = () => {
  const [order, style] = useAppSelector(({ resume, styles }) => [
    resume.interests.order,
    styles.interestStyle
  ]);
  return (
    <div>
      <SectionHeading placeholder='INTERESTS' section='interests' />
      <div className='flex flex-wrap'>
        {order.map((id) => (
          <ShortDetail
            key={id}
            style={style}
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
