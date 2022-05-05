import { faDownload, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SwitchCheckbox from "./components/customs/SwitchCheckbox";
import ThemeBtn from "./components/customs/ThemeBtn";
import ResumeTemplate from "./components/Resume/ResumeTemplate";
import { useAppDispatch, useAppSelector } from "./store/redux/store";
import { setSpellCheck } from "./store/redux/ui/uiSlice";

const Home: React.FC = () => {
  const [showThemes, setShowThemes] = useState(false);
  const { spellCheck, theme } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();
  return (
    <div>
      <main
        className="w-full flex flex-col justify-center items-center"
        spellCheck={spellCheck}
      >
        <div
          className={`flex justify-between sticky top-0 z-10 text-white px-20 py-6  items-center ${theme} w-full`}
        >
          <h1 className="text-4xl font-semibold italic">Resume Maker</h1>
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center bg-white text-black p-2 duration-100 rounded-md hover:shadow-md active:scale-95"
              onClick={() => window.print()}
            >
              <FontAwesomeIcon
                icon={faDownload}
                width={20}
                height={20}
                className="mr-2"
              />
              <p>Download</p>
            </button>
            <SwitchCheckbox
              name="Spell Check"
              fontSize="21px"
              fontWeight="100"
              onChange={() => dispatch(setSpellCheck(!spellCheck))}
              defaultChecked={spellCheck}
            />
          </div>
        </div>
        <div className="items-start w-full z-[9] flex p-6">
          <button
            className="bg-white flex items-center justify-center p-2 rounded-md font-semibold"
            onClick={() => setShowThemes(!showThemes)}
          >
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
              <ThemeBtn theme="orange" />
              <ThemeBtn theme="yellow" />
              <ThemeBtn theme="green" />
              <ThemeBtn theme="blue" />
              <ThemeBtn theme="purple" />
              <ThemeBtn theme="pink" />
            </>
          )}
        </div>
        <ResumeTemplate />
      </main>

      <footer className="text-center mb-8 text-gray-500">
        Made with 💖 by{" "}
        <a
          className="underline text-gray-800"
          href="https://github.com/urtheaman"
        >
          urtheaman
        </a>
      </footer>
    </div>
  );
};

export default Home;
