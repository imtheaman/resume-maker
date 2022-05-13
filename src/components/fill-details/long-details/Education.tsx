import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Education: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.experiences.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='EDUCATION' section='educations' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='educations'
          Fromtolocation={<FromToLocation id={id} section='educations' />}
          placeholder={{
            primary: 'Education Center',
            desc: 'Courses',
          }}
        />
      ))}
    </div>
  );
};

export default Education;
