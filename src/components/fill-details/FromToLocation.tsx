import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import { LongSection } from './LongDetail';

interface Props {
  id: string;
  section: LongSection;
}
const FromToLocation: React.FC<Props> = ({ id, section }) => {
  const dispatch = useAppDispatch();
  const { from, to, location } = useAppSelector(
    ({ resume }) => resume[section].data[id]
  );
  const {
    setFrom,
    setTo,
    setLocation,
  } = require(`../../store/resume/long-details/${section}`);

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <label htmlFor='from'>From -</label>
        <input
          type='month'
          name='from'
          className='ml-3 date'
          value={from}
          onBlur={(e: BlurEvent) =>
            dispatch(setFrom({ id, content: e.currentTarget.value }))
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
          onBlur={(e: BlurEvent) =>
            dispatch(setTo({ id, content: e.currentTarget.value }))
          }
        />
      </div>
      {location && (
        <Editable
          className='italic'
          as='p'
          placeholder='Location'
          content={location}
          onBlur={(e: BlurEvent) =>
            dispatch(setLocation({ id, content: e.currentTarget.value }))
          }
        />
      )}
    </div>
  );
};

export default FromToLocation;
