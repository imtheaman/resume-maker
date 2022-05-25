import {
  setContentStyle,
  setInterestStyle,
  setLanguageStyle,
  setListStyle,
  setSkillStyle
} from '../../store/styles';
import Skewed from '../customs/Skewed.polymorphic';
import ItemStyle from './ItemStyle';
import ShortSectionStyle from './ShortSectionStyle';

const Styles = () => {
  return (
    <div className='w-[60rem] bg-white h-[40rem] rounded-lg space-y-8 p-8 flex flex-col items-center overflow-y-scroll'>
      <h2 className='text-3xl'>Styling</h2>
      <div className='max-w-xl justify-between border-b pb-6 w-full flex items-center'>
        <Skewed as='span' content='Font Size' />
        <div className='flex items-center space-x-4 '>
          <button className='hover:font-bold visited:font-semibold'>
            Small
          </button>
          <button className='hover:font-bold visited:font-semibold'>
            Regular
          </button>
          <button className='hover:font-bold visited:font-semibold'>
            Medium
          </button>
          <button className='hover:font-bold visited:font-semibold'>
            Large
          </button>
        </div>
      </div>
      <div className='max-w-xl justify-between border-b pb-6 w-full flex items-center'>
        <Skewed as='span' content='Font Family' />
        <select className='flex items-center space-x-4 outline-none py-2 px-6'>
          <option value='default'>default</option>
          <option value='Raleway'>Raleway</option>
          <option value='Enter'>Enter</option>
          <option value='Ubuntu'>Ubuntu</option>
          <option value='Roboto'>Roboto</option>
          <option value='Fira Sans'>Fira Sans</option>
          <option value='Raleway'>Raleway</option>
        </select>
      </div>
      <div className='w-full h-full flex flex-col items-center space-y-6'>
        <ItemStyle
          setStyle={setContentStyle}
          style='contentStyle'
          styleType='Content Style'
        />
        <ItemStyle
          style='listStyle'
          setStyle={setListStyle}
          styleType='List Style'
        />
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
      </div>
    </div>
  );
};

export default Styles;
