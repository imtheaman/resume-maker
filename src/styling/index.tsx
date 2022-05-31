import {
  setContentStyle,
  setInterestStyle,
  setLanguageStyle,
  setListStyle,
  setSkillStyle
} from '../../store/styles';
import Skewed from '../customs/Skewed.polymorphic';
import FontStyle from './FontStyle';
import ItemStyle from './ItemStyle';
import ShortSectionStyle from './ShortSectionStyle';

const Styles = () => {
  return (
    <div className='w-[60rem] bg-white h-[40rem] rounded-lg space-y-8 p-8 flex flex-col items-center overflow-y-scroll'>
      <h2 className='text-3xl'>Styling for resume</h2>
      <FontStyle />
      <div className='w-full h-full flex flex-col items-center space-y-6'>
        <ShortSectionStyle
          style='interestStyle'
          setStyle={setInterestStyle}
          styleType='Interests Style'
        />
        <ShortSectionStyle
          style='skillStyle'
          setStyle={setSkillStyle}
          styleType='Skills Style'
        />
        <ShortSectionStyle
          style='languageStyle'
          setStyle={setLanguageStyle}
          styleType='Languages Style'
        />
        <ItemStyle
          setStyle={setContentStyle}
          style='contentStyle'
          styleType='Content List Style'
        />
        <ItemStyle
          style='listStyle'
          setStyle={setListStyle}
          styleType='Desc List Style'
        />
      </div>
    </div>
  );
};

export default Styles;
