import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFocused, setShowTools } from "../../store/ui/uiSlice";
import Awards from "./awards/Awards";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";
import Organizations from "./organizations/Organizations";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import Publications from "./publications/Publications";
import Reference from "./references/Reference";
import Skills from "./skills/Skills";
import Volunteers from "./volunteer/Volunteers";

const FillDetails = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <div
      className="py-8 px-12"
      onFocus={() => {
        dispatch(setFocused(true));
        dispatch(setShowTools(true));
      }}
      onBlur={() => {
        dispatch(setFocused(false));
        dispatch(setShowTools(false));
      }}
    >
      <h1 className="text-2xl mb-12 font-thin capitalize text-center">
        <span
          className={`-skew-x-12 inline-block text-white py-1 px-4 ${theme}`}
        >
          <span className="inline-block skew-x-12">Your resume details</span>
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <Profile />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Interests />
        <Publications />
        <Awards />
        <Reference />
        <Volunteers />
        <Organizations />
      </div>
    </div>
  );
};

export default FillDetails;
