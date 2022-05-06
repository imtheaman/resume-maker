import { useReducer } from "react";

const reducer = (
  state: typeof init_state,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case "FULL_NAME":
      return { ...state, fullName: action.payload };
    case "TITLE":
      return { ...state, title: action.payload };
    case "ABOUT":
      return { ...state, about: action.payload };
    default:
      return state;
  }
};

const init_state = {
  fullName: "Adam Curtis",
  title: "Software Engineer SDE III",
  about: "I've built many softwares which are being used by billions of people",
};

const Header = () => {
  const [state, dispatch] = useReducer(reducer, init_state);
  return (
    <header className="px-10 py-8 space-x-8 flex items-center border-b-2">
      <div className="relative w-40 h-40">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt={state.fullName}
          className="rounded-full"
        />
      </div>
      <div className="space-y-3">
        <div
          className="text-5xl text-gray-900 font-bold content-editable"
          contentEditable
          suppressContentEditableWarning
          placeholder="Full Name"
          onBlur={(e) =>
            dispatch({ type: "FULL_NAME", payload: e.target.textContent })
          }
        >
          {state.fullName}
        </div>
        <div
          className="text-2xl text-gray-800 font-semibold content-editable"
          contentEditable
          suppressContentEditableWarning
          placeholder="Professional title"
          onBlur={(e) =>
            dispatch({ type: "TITLE", payload: e.target.textContent })
          }
        >
          {state.title}
        </div>
        <div
          className="text-xl text-gray-700 font-semibold content-editable"
          contentEditable
          placeholder="Your short introduction"
          suppressContentEditableWarning
          onBlur={(e) =>
            dispatch({ type: "ABOUT", payload: e.target.textContent })
          }
        >
          {state.about}
        </div>
      </div>
    </header>
  );
};

export default Header;
