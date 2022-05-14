import { useAppSelector } from '../../../store/store';
import MediumDetail from '../MediumDetail';
import SectionHeading from '../SectionHeading';

const Publications: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.publications.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='PUBLICATIONS' section='publications' />
      {order.map((id) => (
        <MediumDetail
          key={id}
          id={id}
          placeholder={{ primary: 'Publication Name' }}
          section='publications'
        />
      ))}
    </div>
  );
};

export default Publications;
