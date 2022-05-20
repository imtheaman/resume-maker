import { ElementType, ReactNode } from 'react';
import { useAppSelector } from '../../store/store';

interface Props {
  as: ElementType;
  content?: ReactNode;
  className?: string;
  customBg?: boolean;
  children?: ReactNode;
}
const Skewed: React.FC<Props> = ({
  as: As,
  content,
  className,
  customBg = false,
  children,
  ...otherProps
}) => {
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <As
      className={`-skew-x-12 inline-block py-1 px-4 ${!customBg && theme} ${
        !customBg && 'text-white'
      } ${className && className}`}
      {...otherProps}
    >
      <div className='skew-x-12'>{children || content}</div>
    </As>
  );
};

export default Skewed;
