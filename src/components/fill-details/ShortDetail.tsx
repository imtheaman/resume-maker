import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import interests from '../../store/resume/short-details/interests';
import languages from '../../store/resume/short-details/languages';
import skills from '../../store/resume/short-details/skills';

export type ShortSection = 'interests' | 'languages' | 'skills';

interface Props {
  id: number;
  section: ShortSection;
  placeholder: string;
}

const ShortDetail: React.FC<Props> = ({ id, section, placeholder }) => {
  const { setType, setValue, createData } =
    section === 'interests'
      ? interests
      : section === 'languages'
      ? languages
      : skills;

  const dispatch = useAppDispatch();
  const { type, value } = useAppSelector(
    ({ resume }) => resume[section].data[id]
  );
  return (
    <div>
      <Editable
        as='span'
        placeholder={placeholder}
        className={`skill-border`}
        content={type}
        onBlur={(e: BlurEvent) =>
          dispatch(setType({ id, content: e.target.innerText }))
        }
        onKeyDownCapture={(e: any) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(createData());
          }
        }}
      />
      <input
        type='range'
        min={1}
        value={value}
        max={5}
        onChange={(e: BlurEvent) =>
          // @ts-ignore
          dispatch(setValue({ id, content: +e.target.innerText }))
        }
      />
    </div>
  );
};

export default ShortDetail;
