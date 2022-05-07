import { ExperienceType } from "../../store/redux/resume/experiencesSlice";
import ContentEditable from "../customs/ContentEditable";
import ContentDescription from "./ContentDescription";
import FromTo from "./FromTo";

interface Props extends ExperienceType {
  expId: number;
}

const Experience: React.FC<Props> = ({
  company,
  description,
  from,
  location,
  position,
  to,
  expId,
}) => {
  const id = { name: "exp", id: expId } as const;
  return (
    <div>
      <ContentEditable
        Comp="h2"
        placeholder="Title/Position"
        content={position}
        className="text-2xl text-gray-700 font-semibold"
        onBlur={() => console.log("first")}
      />
      <ContentEditable
        Comp="h3"
        placeholder="Company Name"
        content={company}
        className="text-xl text-gray-600"
        onBlur={() => console.log("second")}
      />
      <FromTo from={from} id={id} to={to} location={location} />
      <ContentDescription
        id={id}
        description={description}
        className="border-b"
        placeholder="Achievements/Tasks"
      />
    </div>
  );
};

export default Experience;
