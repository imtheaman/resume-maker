import {
  createExpDesc,
  setExpDesc,
} from "../../store/redux/resume/experiencesSlice";
import {
  createProjectDesc,
  setProjectDesc,
} from "../../store/redux/resume/projectsSlice";
import { useAppDispatch, useAppSelector } from "../../store/redux/store";
import ContentEditable from "../customs/ContentEditable";

const ContentDescription: React.FC<{
  className?: string;
  placeholder: string;
  description: {
    heading?: string;
    contents: string[];
  };
  id: { name: "exp" | "project"; id: number };
}> = ({ placeholder, className, description: { heading, contents }, id }) => {
  const dispatch = useAppDispatch();
  const descriptionHandler = (input: string, index: number) => {
    switch (id.name) {
      case "exp":
        dispatch(
          setExpDesc({
            expId: id.id,
            descId: index,
            content: input,
          })
        );
        return;
      case "project":
        dispatch(
          setProjectDesc({ projectId: id.id, descId: index, content: input })
        );
        return;
    }
  };

  const enterPressHandler = () => {
    switch (id.name) {
      case "exp":
        dispatch(
          createExpDesc({
            expId: id.id,
          })
        );
        return;
      case "project":
        dispatch(createProjectDesc({ projectId: id.id }));
        return;
    }
  };

  return (
    <div>
      {heading && (
        <ContentEditable
          className={`content-editable italic inline-block text-gray-600 ${
            className && className
          }`}
          Comp="h4"
          content={heading}
          placeholder={placeholder}
        />
      )}

      <ul className="list-[square] mt-2">
        {contents.map((content, index) => (
          <li className="ml-4" key={index}>
            <ContentEditable
              className={`content-editable-dashed w-full focus:my-2 inline-block ${
                !content && "border-b border-dashed"
              }`}
              Comp="div"
              suppressContentEditableWarning
              onBlur={(e: any) => {
                console.log(e.target.textContent);
                descriptionHandler(e.target.textContent || "", index);
              }}
              onKeyDownCapture={(e: any) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  enterPressHandler();
                }
              }}
              content={content}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentDescription;
