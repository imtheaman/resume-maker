import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import Tools from './Tools';

export type MediumSection = 'achievements' | 'awards' | 'publications';
interface Props {
  id: string;
  section: MediumSection;
  placeholder: {
    primary: string;
  };
}

const MediumDetail: React.FC<Props> = ({ id, section, placeholder }) => {
  const dispatch = useAppDispatch();
  const { primary, description, when } = useAppSelector(
    ({ resume }) => resume[section].data[id]
  );
  const {
    setWhen,
    setPrimary,
    setDesc,
  } = require(`../../store/resume/medium-details/${section}`);
  return (
    <>
      <Editable
        as='h4'
        placeholder={placeholder.primary}
        onBlur={(e: BlurEvent) =>
          dispatch(setPrimary({ id, content: e.currentTarget.value }))
        }
        content={primary}
      />
      <div className='flex items-center'>
        <label htmlFor='when'>When -</label>
        <input
          type='month'
          name='when'
          value={when}
          className='ml-3 date'
          onChange={(e: BlurEvent) =>
            dispatch(setWhen({ id, content: e.currentTarget.value }))
          }
        />
      </div>
      <Editable
        as='p'
        className='italic'
        placeholder='description'
        content={description}
        onBlur={(e: BlurEvent) =>
          dispatch(setDesc({ id, content: e.currentTarget.value }))
        }
      />
      <Tools id={id} />
    </>
  );
};

export default MediumDetail;
