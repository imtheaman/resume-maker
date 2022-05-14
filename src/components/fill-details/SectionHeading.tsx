import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import SwitchCheckbox from '../customs/SwitchCheckbox';
import { LongSection } from './LongDetail';
import { MediumSection } from './MediumDetail';
import { ShortSection } from './ShortDetail';

interface Props {
  section: LongSection | MediumSection | ShortSection | 'references';
  placeholder: string;
}

const SectionHeading: React.FC<Props> = ({ section, placeholder }) => {
  const dispatch = useAppDispatch();
  const { heading, beingUsed } = useAppSelector(
    ({ resume }) => resume[section]
  );
  const {
    setHeading,
    setBeingUsed,
  } = require(`../../store/resume/long-details/${section}`);
  return (
    <div className='flex justify-between items-center'>
      <Editable
        placeholder={placeholder}
        as='h2'
        className='h2 flex-grow'
        content={heading}
        onBlur={(e: BlurEvent) => dispatch(setHeading(e.currentTarget.value))}
      />
      <SwitchCheckbox onChange={() => dispatch(setBeingUsed(!beingUsed))} />
    </div>
  );
};

export default SectionHeading;
