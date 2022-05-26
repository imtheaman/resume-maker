import { ElementType } from 'react';
import parse from 'html-react-parser'

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
  if (!content) content = ''
  console.log(content)
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
      {parse(content)}
    </As>
  );
};

export default Editable;
