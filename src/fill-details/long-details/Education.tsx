import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Education: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.educations.order);
  return (
    <div className='space-y-8'>
      <SectionHeading placeholder='EDUCATION' section='educations' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='educations'
          Fromtolocation={<FromToLocation id={id} section='educations' />}
          placeholder={{
            primary: 'Course Name',
            secondary: 'Education Center',
            desc: 'Courses'
          }}
        />
      ))}
    </div>
  );
};

export default Education;
