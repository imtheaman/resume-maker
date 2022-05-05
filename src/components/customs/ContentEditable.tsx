import { ElementType } from "react";
// import {
//   ElementType,
//   ComponentPropsWithoutRef,
//   ReactElement,
//   ReactComponentElement,
//   ReactNode,
//   PropsWithChildren,
// } from "react";

// type Props = {
//   placeholder: string;
//   content: string;
//   className?: string;
//   Comp: any;
// };

// type Props<T extends ElementType> = XProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof XProps<T>>

const ContentEditable: React.FC<any> = ({
  placeholder,
  content,
  className,
  Comp,
  ...otherProps
}) => {
  return (
    <Comp
      contentEditable
      className={`content-editable ${className && className}`}
      placeholder={placeholder}
      suppressContentEditableWarning
      {...otherProps}
    >
      {content}
    </Comp>
  );
};

export default ContentEditable;
