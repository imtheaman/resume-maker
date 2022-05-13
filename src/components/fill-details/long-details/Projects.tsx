import { useAppSelector } from '../../../store/store';
import FromToLocation from '../FromToLocation';
import LongDetail from '../LongDetail';
import SectionHeading from '../SectionHeading';

const Projects: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.experiences.order);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='PROJECTS' section='projects' />
      {order.map((id) => (
        <LongDetail
          key={id}
          id={id}
          section='projects'
          Fromtolocation={<FromToLocation id={id} section='projects' />}
          placeholder={{
            primary: 'Project Name',
            desc: 'Achievements',
          }}
        />
      ))}
    </div>
  );
};

export default Projects;
