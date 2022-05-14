import { useAppSelector } from '../../../store/store';
import SectionHeading from '../SectionHeading';
import ShortDetail from '../ShortDetail';

const Languages: React.FC = () => {
  const length = useAppSelector(({ resume }) => resume.languages.data.length);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='LANGUAGES' section='languages' />
      {new Array(length).map((_, index) => (
        <ShortDetail
          key={index}
          placeholder='interest'
          section='languages'
          id={index}
        />
      ))}
    </div>
  );
};

export default Languages;
