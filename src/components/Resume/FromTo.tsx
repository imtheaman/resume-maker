import { useAppDispatch } from "../../store/redux/store";
import ContentEditable from "../customs/ContentEditable";

const FromTo: React.FC<{
  from: Period;
  to: Period;
  location?: string | false;
  id: { name: "exp" | "project" | "ach"; id: number };
}> = ({ from, to, location, id }) => {
  const dispatch = useAppDispatch();
  const fromHandler = (id: any) => {
    switch (id.name) {
      case "exp":
        return;
    }
  };
  const toHandler = () => {};
  const locationHandler = () => {};
  return (
    <div className="flex justify-between w-full text-gray-500">
      <div className="flex">
        <ContentEditable
          Comp="span"
          placeholder="Month"
          type="number"
          content={from && from.month}
          onBlur={() => fromHandler}
          onKeyDownCapture={(e: any) => isNaN(e.key) && e.preventDefault()}
        />
        <p>/</p>
        <ContentEditable
          Comp="span"
          placeholder="Year"
          content={from && from.year}
          onBlur={() => fromHandler}
          onKeyDownCapture={(e: any) => isNaN(e.key) && e.preventDefault()}
        />
        <p className="mx-3">-</p>
        <ContentEditable
          Comp="span"
          placeholder="Month"
          content={to && to.month}
          onBlur={() => toHandler}
          onKeyDownCapture={(e: any) => isNaN(e.key) && e.preventDefault()}
        />
        <p>/</p>
        <ContentEditable
          Comp="span"
          placeholder="Year"
          content={to && to.year}
          onBlur={() => toHandler}
          onKeyDownCapture={(e: any) => isNaN(e.key) && e.preventDefault()}
        />
      </div>
      {location !== false && (
        <ContentEditable
          Comp="span"
          placeholder="Location"
          className="italic"
          content={location && location}
          onBlur={() => locationHandler}
        />
      )}
    </div>
  );
};

export default FromTo;
