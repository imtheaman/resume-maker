import { useAppDispatch, useAppSelector } from '../../store/store';
import { AllActions, BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable.polymorphic';
import SwitchCheckbox from '../customs/SwitchCheckbox';
import useSection from '../../hooks/useSection';

interface Props {
  section: AllActions;
  placeholder: string;
  className?: string;
}
const SectionHeading: React.FC<Props> = ({
  section,
  placeholder,
  className
}) => {
  const dispatch = useAppDispatch();
  const { heading, beingUsed } = useAppSelector(
    ({ resume }) => resume[section]
  );
  // @ts-ignore
  const { setHeading, setBeingUsed } = useSection(section);

  return (
    <div
      className={`flex justify-between items-center first-letter ${
        className && className
      }`}
    >
      <Editable
        placeholder={placeholder}
        as='h2'
        className='h2 flex-grow'
        content={heading}
        onBlur={(e: BlurEvent) => dispatch(setHeading(e.target.innerText))}
      />
      <SwitchCheckbox
        defaultChecked={beingUsed}
        onChange={() => dispatch(setBeingUsed(!beingUsed))}
      />
    </div>
  );
};

export default SectionHeading;
