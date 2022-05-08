import {
  faAdd,
  faArrowDown,
  faArrowUp,
  faBrush,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";

const Tools = ({ ...otherProps }) => {
  const dispatch = useDispatch();
  const { theme, showTools } = useAppSelector(({ ui }) => ui);
  return (
    <>
      {showTools && (
        <div
          className={`absolute top-1/2 text-white flex flex-col px-2 py-4 space-y-5 rounded-full -translate-y-1/2 -left-[4.8rem] ${theme}`}
          {...otherProps}
        >
          <button className="rounded-btn-8 bg-gray-100 text-gray-800">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <div className="space-y-4">
            <button className="rounded-btn-8 bg-white text-gray-800">
              <FontAwesomeIcon icon={faBrush} />
            </button>
            <button className="rounded-btn-8 bg-white text-gray-800">
              <FontAwesomeIcon icon={faAdd} />
            </button>
            <button className="rounded-btn-8 bg-white text-gray-800">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <button className="rounded-btn-8 bg-gray-100 text-gray-800">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      )}
    </>
  );
};

export default Tools;
