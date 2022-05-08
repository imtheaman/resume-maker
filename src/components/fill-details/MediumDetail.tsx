import Editable from "../customs/Editable";
import Description from "./Description";

const MediumDetail: React.FC<MediumDetail> = ({ description }) => {
  return (
    <div className="fill-details">
      <Editable as="h2" placeholder="REFERENCES" className="h2">
        References
      </Editable>
      <Editable as="h4" placeholder="Contact Name"></Editable>
      <Description {...description} />
    </div>
  );
};

export default MediumDetail;
