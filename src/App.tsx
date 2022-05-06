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
        className="w-full flex flex-col items-center space-y-6 mb-6"
        spellCheck={spellCheck}
      >
        <header
          className={`sticky flex justify-center top-0 z-[11] text-white px-20 py-6 ${theme} w-full`}
        >
          <div className="max-w-[1200px] flex-grow flex justify-between items-center">
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
        </header>
        {/* <Themes> */}
        <div className="flex w-full max-w-[1200px] justify-between">
          <div className="text-black flex">
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
        </div>
        {/* <Themes /> */}
        <ResumeTemplate />
      </main>

      <footer className="text-center mb-8 italic text-gray-500">
        Made with 💖 by{" "}
        <a
          className="underline text-gray-800"
          href="https://github.com/urtheaman"
        >
          urtheaman
        </a>
        <span> Open Sourced</span>
      </footer>
    </div>
  );
};

export default Home;
