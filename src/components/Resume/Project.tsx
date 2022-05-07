import { ProjectType } from "../../store/redux/resume/projectsSlice";
import ContentEditable from "../customs/ContentEditable";
import ContentDescription from "./ContentDescription";
import FromTo from "./FromTo";

interface Props {
  projectId: number;
  to: Period;
  from: Period;
  description: { contents: string[] };
  name: string;
}

const Project: React.FC<Props> = ({
  description,
  from,
  name,
  to,
  projectId,
}) => {
  const id = { name: "project", id: projectId } as const;
  return (
    <div>
      <ContentEditable
        Comp="h2"
        placeholder="Project Name"
        content={name}
        className="text-xl text-gray-700 font-semibold"
        onBlur={() => console.log("second")}
      />
      <FromTo from={from} to={to} id={id} location={false} />
      <ContentDescription
        description={description}
        id={id}
        placeholder="Achievements/Tasks"
      />
    </div>
  );
};

export default Project;
