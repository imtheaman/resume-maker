import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, MediumSection } from '../../vite-env';
import Editable from '../customs/Editable.polymorphic';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';
import { HandleContentstyle } from './list-style';

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
  const [{ primary, description, when }, contentStyle] = useAppSelector(
    ({ resume, styles }) => [resume[section].data[id], styles.contentStyle]
  );
  //@ts-ignore
  const { setWhen, setPrimary, setDesc } = useSection(section);

  return (
    <div
      className={`flex items-start ${HandleContentstyle(
        contentStyle
      )} ${contentStyle}`}
    >
      <div
        className='space-y-3'
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
            className='ml-3 date border-b text-gray-700'
            onChange={(e: BlurEvent) =>
              dispatch(setWhen({ id, content: e.target.value }))
            }
          />
        </div>
        <div className={`flex items-center italic`}>
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
    </div>
  );
};

export default MediumDetail;
