import {
  setAchDesc,
  setAchName,
} from "../../store/redux/resume/achievementsSlice";
import { useAppDispatch } from "../../store/redux/store";
import ContentEditable from "../customs/ContentEditable";
import FromTo from "./FromTo";

const Achievement: React.FC<{
  achId: number;
  name: string;
  description: string;
}> = ({ achId, description, name }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ContentEditable
        Comp="h2"
        placeholder="Achievement Name"
        content={name}
        className="text-xl text-gray-700 font-semibold"
        onBlur={(e: any) =>
          dispatch(setAchName({ achId, content: e.target.textContent }))
        }
      />
      <ContentEditable
        Comp="p"
        placeholder=""
        content={description}
        className={`content-editable-dashed italic text-gray-600 w-full focus:my-2 inline-block ${
          !description && "border-b border-dashed"
        }`}
        onBlur={(e: any) =>
          dispatch(setAchDesc({ achId, content: e.target.textContent }))
        }
        onKeyDownCapture={(e: any) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default Achievement;
