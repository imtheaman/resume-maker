import Editable from "../customs/Editable";

const ShortDetail: React.FC<> = ({ heading, placeholder }) => {

  return (
    <div className="fill-details">
      <Editable as="h2" placeholder={placeholder.toUpperCase()} className="h2">
        {heading}
      </Editable>
      <div>
        <Editable
          as="span"
          placeholder={placeholder}
          className={`skill-border`}
        ></Editable>
      </div>
    </div>
  );
};

export default ShortDetail;
