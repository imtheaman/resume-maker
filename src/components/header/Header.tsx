import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSpellCheck } from "../../store/ui/uiSlice";
import SwitchCheckbox from "../customs/SwitchCheckbox";

const Header = () => {
  const { spellCheck, theme } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  return (
    <header
      className={`sticky flex justify-center top-0 z-[11] text-white px-4 md:px-20 py-6 ${theme} w-full`}
    >
      <div className="max-w-[1200px] flex-grow flex justify-between items-center">
        <h1 className="md:text-3xl select-none font-thin italic">
          Resume Maker
        </h1>
        <div className="flex items-center space-x-4">
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
  );
};

export default Header;
