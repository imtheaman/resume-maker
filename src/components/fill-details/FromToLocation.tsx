import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import { LongSection } from './LongDetail';
import experiences from '../../store/resume/long-details/experiences';
import educations from '../../store/resume/long-details/educations';
import projects from '../../store/resume/long-details/projects';
import volunteers from '../../store/resume/long-details/volunteers';
import organizations from '../../store/resume/long-details/organizations';

interface Props {
  id: string;
  section: LongSection;
}
const FromToLocation: React.FC<Props> = ({ id, section }) => {
  const dispatch = useAppDispatch();
  const { from, to, location } = useAppSelector(
    ({ resume }) => resume[section].data[id]
  );
  //@ts-ignore
  const { setFrom, setTo, setLocation } =
    section === 'educations'
      ? educations
      : section === 'projects'
      ? projects
      : section === 'volunteers'
      ? volunteers
      : section === 'organizations'
      ? organizations
      : experiences;

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <label htmlFor='from'>From -</label>
        <input
          type='month'
          name='from'
          className='ml-3 date'
          value={from}
          onChange={(e: BlurEvent) =>
            dispatch(setFrom({ id, content: e.target.value }))
          }
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor='to'>To -</label>
        <input
          type='month'
          name='to'
          value={to}
          className='ml-3 date'
          onChange={(e: BlurEvent) =>
            dispatch(setTo({ id, content: e.target.value }))
          }
        />
      </div>
      {typeof location === 'string' && (
        <Editable
          className='italic'
          as='p'
          placeholder='Location'
          content={location}
          onBlur={(e: BlurEvent) =>
            dispatch(setLocation({ id, content: e.target.value }))
          }
        />
      )}
    </div>
  );
};

export default FromToLocation;
