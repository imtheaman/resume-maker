import { ElementType } from 'react';

const Editable: React.FC<{
  as: ElementType;
  content: string;
  placeholder?: string;
  className?: string;
  onKeyDownCapture?: Function;
  [key: string]: any;
}> = ({
  placeholder,
  content,
  className,
  as: As,
  onKeyDownCapture,
  ...otherProps
}) => {
  return (
    <As
      contentEditable
      className={`content-editable ${className && className}`}
      placeholder={placeholder}
      suppressContentEditableWarning
      onKeyDownCapture={
        onKeyDownCapture
          ? onKeyDownCapture
          : (e: any) => e.key === 'Enter' && e.preventDefault()
      }
      {...otherProps}
    >
      {content}
    </As>
  );
};

export default Editable;
