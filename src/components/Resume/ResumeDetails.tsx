import { useAppSelector } from "../../store/redux/store";
import SectionHeading from "./SectionHeading";
import Experience from "./Experience";
import Project from "./Project";
import { useContext } from "react";
import ResumeEditContext from "../../store/context-api/context";
import Achievement from "./Achievement";

const ResumeDetails: React.FC = () => {
  const { experiences, projects, achievements } = useAppSelector(
    (rootState) => rootState
  );
  const context = useContext(ResumeEditContext);
  return (
    <div className="px-10 py-6 grid gap-x-12 gap-y-6 grid-cols-2">
      {experiences.beingUsed && (
        <div>
          <SectionHeading
            heading={experiences.heading}
            placeholder="Work Experience"
          />
          {experiences.data.map((res, index) => (
            <Experience key={index} expId={index} {...res} />
          ))}
        </div>
      )}
      {projects.beingUsed && (
        <div>
          <SectionHeading
            heading={projects.heading}
            placeholder="Projects/Works"
          />
          {projects.data.map((res, index) => (
            <Project key={index} projectId={index} {...res} />
          ))}
        </div>
      )}
      {achievements.beingUsed && (
        <div>
          <SectionHeading
            heading={achievements.heading}
            placeholder="Projects/Works"
          />
          {achievements.data.map((res, index) => (
            <Achievement key={index} achId={index} {...res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeDetails;
