import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Awards: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.awards.order);
  return (
    <div className='space-y-4'>
      <SectionHeading placeholder='AWARDS' section='awards' />
      {order.map((id) => (
        <MediumDetail
          key={id}
          id={id}
          placeholder={{ primary: 'Award Name', desc: 'When Received' }}
          section='awards'
        />
      ))}
    </div>
  );
};

export default Awards;
