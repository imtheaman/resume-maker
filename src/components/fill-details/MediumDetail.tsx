import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';

import achievements from '../../store/resume/medium-details/achievements';
import awards from '../../store/resume/medium-details/awards';
import publications from '../../store/resume/medium-details/publications';

export type MediumSection = 'achievements' | 'awards' | 'publications';
interface Props {
  id: string;
  section: MediumSection;
  placeholder: {
    primary: string;
    desc: string;
  };
}

const MediumDetail: React.FC<Props> = ({ id, section, placeholder }) => {
  const dispatch = useAppDispatch();
  const [{ primary, description, when }, listStyle] = useAppSelector(
    ({ resume, ui }) => [resume[section].data[id], ui.listStyle]
  );
  const { setWhen, setPrimary, setDesc } =
    section === 'achievements'
      ? achievements
      : section === 'awards'
      ? awards
      : publications;
  return (
    <>
      <Editable
        as='h4'
        className='input-primary'
        placeholder={placeholder.primary}
        onBlur={(e: BlurEvent) =>
          dispatch(setPrimary({ id, content: e.target.innerText }))
        }
        content={primary}
      />
      <div className='flex items-center'>
        <label htmlFor='when' className='desc-heading'>
          {placeholder.desc} -
        </label>
        <input
          type='text'
          name='when'
          value={when}
          className='ml-3 date border-b'
          onChange={(e: BlurEvent) =>
            dispatch(setWhen({ id, content: e.target.innerText }))
          }
        />
      </div>
      <div className='flex'>
        <span className={`${listStyle} mr-2`} />
        <Editable
          as='p'
          content={description}
          className='desc-content'
          onBlur={(e: BlurEvent) =>
            dispatch(setDesc({ id, content: e.target.innerText }))
          }
        />
      </div>
    </>
  );
};

export default MediumDetail;
