import { createExpDesc } from "../../../store/resume/experiencesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setFocused, setShowTools } from "../../../store/ui/uiSlice";
import Editable from "../../customs/Editable";
import Description from "../Description";
import FromToLocation from "../FromToLocation";
import LongDetail from "../LongDetail";
import Tools from "../Tools";

const Experience: React.FC<LongDetail> = (props) => {
  const dispatch = useAppDispatch();
  const { listStyle } = useAppSelector(({ ui }) => ui);
  return <LongDetail {...props} />;
};

export default Experience;
