import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Organization: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.organizations.order);
  return (
    <div className='space-y-8'>
      <SectionHeading placeholder='WORK EXPERIENCE' section='organizations' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='organizations'
          Fromtolocation={<FromToLocation id={id} section='organizations' />}
          placeholder={{
            primary: 'Title/Position',
            secondary: 'Organization Name',
            desc: 'Achievements/Tasks'
          }}
        />
      ))}
    </div>
  );
};

export default Organization;
