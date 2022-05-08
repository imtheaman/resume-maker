import {
  faFont,
  faPalette,
  faPenToSquare,
  faSwatchbook,
  faCheckCircle,
  faGlobe,
  faBold,
  faUnderline,
  faItalic,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeBtn from "../customs/ThemeBtn";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setScreen } from "../../store/ui/uiSlice";

const Nav = () => {
  const [showThemes, setShowThemes] = useState(false);
  const dispatch = useAppDispatch();
  const { screen, theme, focused } = useAppSelector(({ ui }) => ui);
  return (
    <div className="flex space-x-6">
      <div className="text-black flex">
        <button className="btn" onClick={() => setShowThemes(!showThemes)}>
          <FontAwesomeIcon
            icon={faPalette}
            width={18}
            height={18}
            className="mr-2"
          />
          Themes
        </button>
        {showThemes && (
          <>
            <ThemeBtn theme="bg-orange-500" />
            <ThemeBtn theme="bg-yellow-500" />
            <ThemeBtn theme="bg-green-500" />
            <ThemeBtn theme="bg-blue-500" />
            <ThemeBtn theme="bg-blue-800" />
            <ThemeBtn theme="bg-purple-800" />
            <ThemeBtn theme="bg-pink-500" />
          </>
        )}
      </div>
      <button className="btn" onClick={() => dispatch(setScreen("templates"))}>
        <FontAwesomeIcon
          icon={faSwatchbook}
          width={18}
          height={18}
          className="mr-2"
        />
        Templates
      </button>
      <button className="btn">
        <FontAwesomeIcon
          icon={faFont}
          width={18}
          height={18}
          className="mr-2"
        />
        Font Size
      </button>
      <button
        className={`custom-btn relative z-[9] ${theme + " text-white"}`}
        onClick={() =>
          dispatch(setScreen(screen !== "resume" ? "resume" : "edit"))
        }
      >
        {screen !== "resume" ? (
          <>
            <FontAwesomeIcon
              icon={faCheckCircle}
              width={18}
              height={18}
              className="mr-2"
            />
            <span>See Resume</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faPenToSquare}
              width={18}
              height={18}
              className="mr-2"
            />
            <span>Fill Details</span>
          </>
        )}
      </button>
      <button className="btn">
        <FontAwesomeIcon
          icon={faGlobe}
          width={18}
          height={18}
          className="mr-2"
        />
        Save Online
      </button>
      {!showThemes && (
        <>
          <button disabled={!focused} className="rounded-btn-10">
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button disabled={!focused} className="rounded-btn-10">
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button disabled={!focused} className="rounded-btn-10">
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button disabled={!focused} className="rounded-btn-10">
            <FontAwesomeIcon icon={faLink} />
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
