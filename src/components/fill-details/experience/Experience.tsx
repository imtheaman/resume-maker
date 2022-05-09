import { useAppDispatch, useAppSelector } from "../../../store/store";
import LongDetail from "../LongDetail";

const Experience: React.FC<LongDetail> = (props) => {
  const dispatch = useAppDispatch();
  const { listStyle } = useAppSelector(({ ui }) => ui);
  return <LongDetail {...props} />;
};

export default Experience;
