import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faGlobe,
  faMapLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faReddit,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import ContactInfoItem from "./ContactInfoItem";

const reducer = (
  state: typeof init_state,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHONE":
      return { ...state, phone: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "GITHUB":
      return { ...state, github: action.payload };
    case "STACKOVERFLOW":
      return { ...state, stackoverflow: action.payload };
    case "WEBSITE":
      return { ...state, website: action.payload };
    case "LINKEDIN":
      return { ...state, linkedin: action.payload };
    case "REDDIT":
      return { ...state, reddit: action.payload };
    case "MEDIUM":
      return { ...state, medium: action.payload };
    default:
      return state;
  }
};

const init_state = {
  email: "adam@google.com",
  phone: "+1283698554",
  address: "New York, Washington",
  github: "adamcurtis",
  stackoverflow: "geekyadam1",
  website: "https://codewithadam.io",
  linkedin: "adamcurtis",
  reddit: "adam12568",
  medium: "adam1562",
};

const ContactInfo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, init_state);
  return (
    <div className="py-5 px-10 border-b-2 w-full grid gap-y-4 grid-cols-3">
      {state.email && (
        <ContactInfoItem
          href={`mailto:${state.email}`}
          icon={faEnvelope}
          placeholder="Email address"
          onBlur={(e) =>
            dispatch({ type: "EMAIL", payload: e.target.textContent })
          }
          value={state.email}
        />
      )}
      {state.website && (
        <ContactInfoItem
          placeholder="Website"
          onBlur={(e) =>
            dispatch({ type: "WEBSITE", payload: e.target.textContent })
          }
          href={`${state.website}`}
          icon={faGlobe}
          value={state.website.replace("https://", "").replace("http://", "")}
        />
      )}
      {state.address && (
        <ContactInfoItem
          placeholder="Address"
          onBlur={(e) =>
            dispatch({ type: "ADDRESS", payload: e.target.textContent })
          }
          href={`https://www.google.com/maps/place/${state.address}`}
          icon={faMapLocationDot}
          value={state.address}
        />
      )}
      {state.phone && (
        <ContactInfoItem
          placeholder="Phone Number"
          onBlur={(e) =>
            dispatch({ type: "PHONE", payload: e.target.textContent })
          }
          href={`tel:${state.phone}`}
          icon={faMobile}
          value={state.phone}
        />
      )}
      {state.github && (
        <ContactInfoItem
          placeholder="Github Username"
          onBlur={(e) =>
            dispatch({ type: "GITHUB", payload: e.target.textContent })
          }
          href={`https://github.com/${state.github}`}
          icon={faGithub}
          value={state.github}
        />
      )}
      {state.stackoverflow && (
        <ContactInfoItem
          placeholder="Stackoverflow Username"
          onBlur={(e) =>
            dispatch({ type: "STACKOVERFLOW", payload: e.target.textContent })
          }
          href={`https://stackoverflow.com/users/${state.stackoverflow}`}
          icon={faStackOverflow}
          value={state.stackoverflow}
        />
      )}
      {state.linkedin && (
        <ContactInfoItem
          placeholder="Linkedin Username"
          onBlur={(e) =>
            dispatch({ type: "LINKEDIN", payload: e.target.textContent })
          }
          href={`https://linkedin.com/in/${state.linkedin}`}
          icon={faLinkedin}
          value={state.linkedin}
        />
      )}
      {state.reddit && (
        <ContactInfoItem
          placeholder="Reddit Username"
          onBlur={(e) =>
            dispatch({ type: "REDDIT", payload: e.target.textContent })
          }
          icon={faReddit}
          href={`https://reddit.com/user/${state.reddit}`}
          value={state.reddit}
        />
      )}
      {state.medium && (
        <ContactInfoItem
          placeholder="Medium Username"
          onBlur={(e) =>
            dispatch({ type: "MEDIUM", payload: e.target.textContent })
          }
          icon={faMedium}
          href={`https://medium.com/user/${state.medium}`}
          value={state.medium}
        />
      )}
    </div>
  );
};

export default ContactInfo;
