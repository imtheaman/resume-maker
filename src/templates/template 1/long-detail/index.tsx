import { useAppSelector } from '../../../../store/store';
import { LongSection } from '../../../../vite-env';

const LongDetail: React.FC<{ section: LongSection; id: string }> = ({
  section, id
}) => {
  const [{ primary, secondary, description }, listStyle, contentStyle] =
    useAppSelector(({ resume, styles }) => [
      resume[section].data[id],
      styles.listStyle,
      styles.contentStyle
    ]);

  const HandleContentstyle = (): string => {
    return contentStyle.includes('border')
      ? 'before:mt-2'
      : contentStyle.startsWith('list-style')
      ? 'before:mt-[0.65rem]'
      : '';
  };
  return (
    <div
      className={`flex items-start ${HandleContentstyle()} ${contentStyle}`}
    >
      
    </div>
  );
};

export default LongDetail;
