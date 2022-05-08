import { createExpDesc } from "../../store/resume/experiencesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Editable from "../customs/Editable";

const Description: React.FC<{
  descHeading?: string;
  placeholder?: string;
  contents: string[];
}> = ({ descHeading, placeholder, contents }) => {
  const dispatch = useAppDispatch();
  const listStyle = useAppSelector(({ ui }) => ui.listStyle);
  return (
    <div className="flex flex-col space-y-2">
      {descHeading && placeholder && (
        <Editable as="h4" className="desc-heading" placeholder={placeholder}>
          {descHeading}
        </Editable>
      )}
      <div className={`input-container ${listStyle}`}>
        {contents.map((el) => (
          <Editable
            placeholder=""
            as="p"
            className="text-gray-700 w-full border-dashed empty:border-b"
            onKeyDownCapture={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                dispatch(createExpDesc({ expId: 0 }));
              }
            }}
          >
            {el}
          </Editable>
        ))}
      </div>
    </div>
  );
};

export default Description;
