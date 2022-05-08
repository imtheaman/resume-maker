import { ElementType } from "react";

const Editable: React.FC<{
  as: ElementType;
  placeholder: string;
  className?: string;
  onKeyDownCapture?: Function;
  [key: string]: any;
}> = ({
  placeholder,
  content,
  className,
  children,
  as: As,
  onKeyDownCapture,
  ...otherProps
}) => {
  console.log(typeof onKeyDownCapture);
  return (
    <As
      contentEditable
      className={`content-editable ${className && className}`}
      placeholder={placeholder}
      suppressContentEditableWarning
      onKeyDownCapture={
        onKeyDownCapture
          ? onKeyDownCapture
          : (e: any) => e.key === "Enter" && e.preventDefault()
      }
      {...otherProps}
    >
      {children}
    </As>
  );
};

export default Editable;
