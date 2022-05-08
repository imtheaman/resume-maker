import { useAppDispatch } from "../../store/store";
import { setShowTools } from "../../store/ui/uiSlice";
import Editable from "../customs/Editable";
import Description from "./Description";
import FromToLocation from "./FromToLocation";
import SectionHeading from "./SectionHeading";
import Tools from "./Tools";

const LongDetail: React.FC<LongDetail> = ({ setSection, section, description }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="fill-details">
      <SectionHeading
        setSection={setSection}
        placeholder={section.placeholder}
        content={section.heading}
      />
      <Editable as="h3" className="input-primary" placeholder="Study Program" />
      <Editable
        as="h3"
        className="input-primary"
        placeholder="Institute/Place of study"
      />
      <FromToLocation />
      {description.heading && description.placeholder && (
        <Description
          contents={description.contents}
          descHeading={description.heading}
          placeholder={description.placeholder}
        />
      )}
      <Tools
        onClick={(e: any) => {
          dispatch(setShowTools(true));
        }}
      />
    </div>
  );
};

export default LongDetail;
