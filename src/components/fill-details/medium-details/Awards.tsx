import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Awards: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.awards.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='AWARDS' section='awards' />
      {order.map((id) => (
        <MediumDetail
        key={id}
          id={id}
          placeholder={{ primary: 'Award Name' }}
          section='awards'
        />
      ))}
    </div>
  );
};

export default Awards;