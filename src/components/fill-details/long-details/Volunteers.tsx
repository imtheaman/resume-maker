import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Volunteer: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.volunteers.order);
  return (
    <div className='space-y-8'>
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
