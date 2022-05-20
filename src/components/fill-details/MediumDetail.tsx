import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, MediumSection } from '../../../vite-env';
import Editable from '../customs/Editable';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';

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
    ({ resume, editor }) => [resume[section].data[id], editor.listStyle]
  );
  const { setWhen, setPrimary, setDesc } = useSection(section)
  return (
    <div
      className='space-y-4'
      onFocus={() => dispatch(setFocused({ id, section }))}
    >
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
    </div>
  );
};

export default MediumDetail;
