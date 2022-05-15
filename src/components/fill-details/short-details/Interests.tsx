import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Interests: React.FC = () => {
  const data = useAppSelector(({ resume }) => resume.interests.data);
  return (
    <div>
      <SectionHeading placeholder='INTERESTS' section='interests' />
      <div className='flex flex-wrap'>
        {data.map((_, index) => (
          <ShortDetail
            key={index}
            style={'short-section-border'}
            placeholder='interest'
            section='interests'
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Interests;
