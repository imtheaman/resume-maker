import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setFontFamily, setFontSize } from '../../store/styles';
import Skewed from '../customs/Skewed.polymorphic';

const FontStyle = () => {
  const [fontSize, fontFamily] = useAppSelector(({ styles }) => [
    styles.fontSize,
    styles.fontFamily
  ]);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className='max-w-xl justify-between border-b pb-6 w-full flex items-center'>
        <Skewed as='span' content='Font Size' />
        <div className='flex items-center space-x-4 '>
          <button
            onClick={() => dispatch(setFontSize('small'))}
            className={`hover:font-bold visited:font-semibold ${
              fontSize === 'small' && 'font-semibold'
            }`}
          >
            Small
          </button>
          <button
            onClick={() => dispatch(setFontSize('regular'))}
            className={`hover:font-bold visited:font-semibold ${
              fontSize === 'regular' && 'font-semibold'
            }`}
          >
            Regular
          </button>
          <button
            onClick={() => dispatch(setFontSize('medium'))}
            className={`hover:font-bold visited:font-semibold ${
              fontSize === 'medium' && 'font-semibold'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => dispatch(setFontSize('large'))}
            className={`hover:font-bold visited:font-semibold ${
              fontSize === 'large' && 'font-semibold'
            }`}
          >
            Large
          </button>
        </div>
      </div>
      <div className='max-w-xl justify-between border-b pb-6 w-full flex items-center'>
        <Skewed as='span' content='Font Family' />
        <select
          // @ts-ignore
          onChange={(e) => dispatch(setFontFamily(e.target.value))}
          defaultValue={fontFamily}
          className='flex items-center space-x-4 outline-none py-2 px-6'
        >
          <option value='default'>default</option>
          <option value='raleway'>Raleway</option>
          <option value='inter'>Inter</option>
          <option value='ubuntu'>Ubuntu</option>
          <option value='roboto'>Roboto</option>
          <option value='fira sans'>Fira Sans</option>
          <option value='open sans'>Open Sans</option>
        </select>
      </div>
    </>
  );
};

export default FontStyle;
