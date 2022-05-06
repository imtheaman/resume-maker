import { useAppDispatch } from "../../store/redux/store";
import ContentEditable from "../customs/ContentEditable";

interface Period {
  month: number | null;
  year: number | null;
}
const FromTo: React.FC<{
  from: Period;
  to: Period;
  location?: string;
  id: { name: "exp" | "project" | "ach"; id: number };
}> = ({ from, to, location = false, id }) => {
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
          content={from.month}
          onBlur={() => fromHandler}
        />
        <p>/</p>
        <ContentEditable
          Comp="span"
          placeholder="Year"
          content={from.year}
          onBlur={() => fromHandler}
        />
        <p className="mx-3">-</p>
        <ContentEditable
          Comp="span"
          placeholder="Month"
          content={to.month}
          onBlur={() => toHandler}
        />
        <p>/</p>
        <ContentEditable
          Comp="span"
          placeholder="Year"
          content={to.year}
          onBlur={() => toHandler}
        />
      </div>
      {location !== false && (
        <ContentEditable
          Comp="span"
          placeholder="Location"
          className="italic"
          content={location}
          onBlur={() => locationHandler}
        />
      )}
    </div>
  );
};

export default FromTo;
