import { ElementType } from 'react';
import parse from 'html-react-parser';
import { useAppSelector } from '../../store/store';

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
  if (!content) content = '';
  const screen = useAppSelector(({ ui }) => ui.screen);
  return (
    <As
      contentEditable={screen === 'edit'}
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
