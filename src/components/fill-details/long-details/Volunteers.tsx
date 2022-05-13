import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Volunteer: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.experiences.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='VOLUNTEER' section='volunteers' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='volunteers'
          Fromtolocation={<FromToLocation id={id} section='volunteers' />}
          placeholder={{
            primary: 'Title/Position',
            secondary: 'Organization Name',
            desc: 'Tasks',
          }}
        />
      ))}
    </div>
  );
};

export default Volunteer;
