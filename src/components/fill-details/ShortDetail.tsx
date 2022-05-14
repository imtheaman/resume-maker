import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';

export type ShortSection = 'interests' | 'languages' | 'skills';

interface Props {
  id: number;
  section: ShortSection;
  placeholder: string;
}

const ShortDetail: React.FC<Props> = ({ id, section, placeholder }) => {
  const {
    setType,
    setValue,
    createData,
  } = require(`../../store/resume/short-details/${section}`);
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
          dispatch(setType({ id, content: e.currentTarget.value }))
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
          dispatch(setValue({ id, content: e.currentTarget.value }))
        }
      />
    </div>
  );
};

export default ShortDetail;
