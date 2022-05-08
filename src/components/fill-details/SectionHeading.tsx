import { useAppDispatch } from "../../store/store";
import Editable from "../customs/Editable";
import SwitchCheckbox from "../customs/SwitchCheckbox";

const SectionHeading: React.FC<SectionHeading> = ({ content, placeholder, setSection }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      <Editable placeholder={placeholder} as="h2" className="h2 flex-grow">
        {content}
      </Editable>
      <SwitchCheckbox onChange={setSection} />
    </div>
  );
};

export default SectionHeading;
