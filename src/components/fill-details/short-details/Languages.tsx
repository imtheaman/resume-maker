import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Languages: React.FC = () => {
  const data = useAppSelector(({ resume }) => resume.languages.data);
  return (
    <div>
      <SectionHeading placeholder='LANGUAGES' section='languages' />
      {data.map((_, index) => (
        <ShortDetail
          style={'short-section-fill-dark'}
          key={index}
          placeholder='language'
          section='languages'
          id={index}
        />
      ))}
    </div>
  );
};

export default Languages;
