import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, ShortSection } from '../../vite-env';
import Editable from '../customs/Editable.polymorphic';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';

interface Props {
  id: string;
  section: ShortSection;
  placeholder: string;
  style: string;
}

const ShortDetail: React.FC<Props> = ({ id, section, style, placeholder }) => {
  //@ts-ignore
  const { setType, setValue, createEl } = useSection(section);

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
            dispatch(createEl({ id }));
          }
        }}
      />
    </div>
  );
};

export default ShortDetail;
