import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfoItem: React.FC<{
  icon: IconProp;
  value: string;
  href: string;
  onBlur: (e: any) => any;
  placeholder: string;
}> = ({ icon, placeholder, onBlur, value, href, ...otherProps }) => {
  return (
    <div className="flex items-center" {...otherProps}>
      <FontAwesomeIcon
        icon={icon}
        width={20}
        height={20}
        className="text-gray-800"
      />
      <a
        contentEditable
        suppressContentEditableWarning
        placeholder={placeholder}
        onBlur={onBlur}
        className="ml-1 text-lg content-editable"
        href={href}
      >
        {value}
      </a>
    </div>
  );
};

export default ContactInfoItem;
