import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, ShortSection } from '../../../vite-env';
import Editable from '../customs/Editable';
import interests from '../../store/resume/short-details/interests';
import languages from '../../store/resume/short-details/languages';
import skills from '../../store/resume/short-details/skills';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';

interface Props {
  id: string;
  section: ShortSection;
  placeholder: string;
  style: string;
}

const ShortDetail: React.FC<Props> = ({ id, section, style, placeholder }) => {
  const { setType, setValue, create } = useSection(section);

  const dispatch = useAppDispatch();
  const { type, value } = useAppSelector(
    ({ resume }) => resume[section].data[id]
  );
  return (
    <div onFocus={() => dispatch(setFocused({ id, section }))}>
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
            dispatch(create());
          }
        }}
      />
    </div>
  );
};

export default ShortDetail;
