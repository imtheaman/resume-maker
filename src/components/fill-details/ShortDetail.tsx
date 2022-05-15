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
  style: string;
}

const ShortDetail: React.FC<Props> = ({ id, section, style, placeholder }) => {
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
    <Editable
      as='span'
      placeholder={placeholder}
      className={style}
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
  );
};

export default ShortDetail;
