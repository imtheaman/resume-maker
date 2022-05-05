import { setAchName } from "../../store/redux/resume/achievementsSlice";
import { useAppDispatch } from "../../store/redux/store";
import ContentEditable from "../customs/ContentEditable";
import FromTo from "./FromTo";

const Achievement: React.FC<{ achId: number; content: string, from: any, to: any }> = ({
  achId,
  content,
  from,
  to
}) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ContentEditable
        Comp="h2"
        placeholder="Achievement Name"
        content={content}
        className="text-xl text-gray-700 font-semibold"
        onBlur={(e: any) =>
          dispatch(setAchName({ achId, content: e.target.textContent }))
        }
      />
      <FromTo from={from} to={to} id={{name: 'ach', id: achId}} />
    </div>
  );
};

export default Achievement;
