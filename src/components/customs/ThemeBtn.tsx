import { useAppDispatch } from "../../store/redux/store";
import { setTheme } from "../../store/redux/ui/uiSlice";

const ThemeBtn: React.FC<{ theme: string }> = ({ theme }) => {
  const dispatch = useAppDispatch();
  const color = `bg-${theme}-500`;
  return (
    <button
      onClick={() => dispatch(setTheme(color))}
      className={`w-6 h-6 ${color} rounded-md m-2`}
    ></button>
  );
};

export default ThemeBtn;
