import { ElementType } from "react";

const Editable: React.FC<{
  as: ElementType;
  placeholder: string;
  className?: string;
  [key: string]: any;
}> = ({ placeholder, content, className, children, as: As, ...otherProps }) => {
  return (
    <As
      contentEditable
      className={`content-editable ${className && className}`}
      placeholder={placeholder}
      suppressContentEditableWarning
      onKeyDownCapture={(e: any) => e.key === "Enter" && e.preventDefault()}
      {...otherProps}
    >
      {children}
    </As>
  );
};

export default Editable;
