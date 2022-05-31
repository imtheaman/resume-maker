import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, LongSection } from '../../vite-env';
import Editable from '../customs/Editable.polymorphic';
import experiences from '../../store/resume/long-details/experiences';
import educations from '../../store/resume/long-details/educations';
import projects from '../../store/resume/long-details/projects';
import volunteers from '../../store/resume/long-details/volunteers';
import organizations from '../../store/resume/long-details/organizations';
import parse from 'html-react-parser'

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
    <>
      <div className='flex justify-between whitespace-nowrap items-center '>
        <div className='flex items-center'>
          <label htmlFor='from' className='desc-heading'>
            From -
          </label>
          <Editable
            as='div'
            className='min-w-[7rem] focus:border-b text-gray-700 ml-2'
            placeholder='DD-MM-YYYY'
            content={parse(from)}
            onBlur={(e: BlurEvent) =>
              dispatch(setFrom({ id, content: e.target.innerText }))
            }
          />
        </div>
        <div className='flex items-center'>
          <label htmlFor='to' className='desc-heading'>
            To -
          </label>
          <Editable
            as='div'
            content={parse(to)}
            placeholder='DD-MM-YYYY'
            className={`min-w-[7rem] focus:border-b text-gray-700 ml-2`}
            onBlur={(e: BlurEvent) =>
              dispatch(setTo({ id, content: e.target.innerText }))
            }
          />
        </div>
      </div>
      {typeof location === 'string' && (
        <div className='flex justify-between leading-3'>
          <span className='desc-heading'>Location - </span>
          <Editable
            className='flex-grow ml-4 empty:pb-1 focus:pb-1 text-gray-700 empty:border-b'
            as='div'
            placeholder='Location'
            content={parse(location)}
            onBlur={(e: BlurEvent) =>
              dispatch(setLocation({ id, content: e.target.innerText }))
            }
          />
        </div>
      )}
    </>
  );
};

export default FromToLocation;
