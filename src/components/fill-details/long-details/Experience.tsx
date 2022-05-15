import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Experience: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.experiences.order);
  return (
    <div className='space-y-4'>
      <SectionHeading placeholder='WORK EXPERIENCE' section='experiences' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='experiences'
          Fromtolocation={<FromToLocation id={id} section='experiences' />}
          placeholder={{
            primary: 'Title/Position',
            secondary: 'Company/Organization Name',
            desc: 'Achievements/Tasks',
          }}
        />
      ))}
    </div>
  );
};

export default Experience;
