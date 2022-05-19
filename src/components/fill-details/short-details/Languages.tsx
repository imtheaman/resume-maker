import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Languages: React.FC = () => {
  const order = useAppSelector(({ resume }) => resume.languages.order);
  return (
    <div>
      <SectionHeading placeholder='LANGUAGES' section='languages' />
      {order.map((id) => (
        <ShortDetail
          style={'short-section-fill-dark'}
          key={id}
          placeholder='language'
          section='languages'
          id={id}
        />
      ))}
    </div>
  );
};

export default Languages;
