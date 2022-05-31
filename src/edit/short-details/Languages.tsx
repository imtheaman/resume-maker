import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Languages: React.FC = () => {
  const [order, style] = useAppSelector(({ resume, styles }) => [
    resume.languages.order,
    styles.languageStyle
  ]);
  return (
    <div>
      <SectionHeading placeholder='LANGUAGES' section='languages' />
      <div className='flex flex-wrap'>
        {order.map((id) => (
          <ShortDetail
            style={style}
            key={id}
            placeholder='language'
            section='languages'
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Languages;
