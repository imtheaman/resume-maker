import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFocused, setShowTools } from "../../store/ui/uiSlice";
import Editable from "../customs/Editable";
import Tools from "./Tools";

const FillDetails = ({}) => {
  const dispatch = useAppDispatch();
  const { theme, listStyle } = useAppSelector(({ ui }) => ui);
  return (
    <div
      className="py-8 px-12 flex flex-col"
      onFocus={() => {
        dispatch(setFocused(true));
        dispatch(setShowTools(true));
      }}
    >
      <h1 className="text-2xl font-thin capitalize text-center">
        <span
          className={`-skew-x-12 inline-block text-white py-1 px-4 ${theme}`}
        >
          <span className="inline-block skew-x-12">Your resume details</span>
        </span>
      </h1>
      <div className="flex relative flex-col space-y-3 w-full max-w-md">
        <Editable placeholder="EXPERIENCE" as="h2" className="h2">
          Experience
        </Editable>
        <input className="input-primary" placeholder="Position/Title" />
        <input className="input-primary" placeholder="Company" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="from">From -</label>
            <input type="month" name="from" className="ml-3 date" />
          </div>
          <div className="flex items-center">
            <label htmlFor="to">To -</label>
            <input type="month" name="to" className="ml-3 date" />
          </div>
        </div>
        <div className="flex flex-col">
          <Editable
            as="h4"
            className="desc-heading"
            placeholder="Achievements/Tasks"
          >
            Achievements/Tasks
          </Editable>
          <div className={`input-container before:${listStyle}`}>
            <input type="text" className="input" />
          </div>
        </div>
        <Tools
          onClick={(e: any) => {
            e.stopPropagation();
            dispatch(setShowTools(true));
          }}
        />
      </div>
    </div>
  );
};

export default FillDetails;
