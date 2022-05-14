import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Interests: React.FC = () => {
  const length = useAppSelector(({ resume }) => resume.interests.data.length);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='INTERESTS' section='interests' />
      {new Array(length).map((_, index) => (
        <ShortDetail
          key={index}
          placeholder='interest'
          section='interests'
          id={index}
        />
      ))}
    </div>
  );
};

export default Interests;
