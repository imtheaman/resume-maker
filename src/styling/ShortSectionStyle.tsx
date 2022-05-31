import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { style, Styles } from '../../vite-env';
import Skewed from '../customs/Skewed.polymorphic';

const ShortSectionStyle: React.FC<{
  styleType: string;
  style: Styles[number];
  setStyle: ActionCreatorWithPayload<style, string>;
}> = ({ styleType, style, setStyle }) => {
  const styleValue = useAppSelector(({ styles }) => styles[style]);
  const dispatch = useAppDispatch();
  return (
    <div className='max-w-xl w-full flex items-center pb-6 border-b justify-between'>
      <Skewed as='span'>{styleType}</Skewed>
      <div className='flex flex-col items-center'>
        <div className='capitalize short-section-border'>
          {style.slice(0, -5)}
        </div>
        <input
          type='radio'
          checked={styleValue === 'short-section-border'}
          onChange={() => dispatch(setStyle('short-section-border'))}
          name={style}
        />
      </div>
      <div className='flex flex-col items-center'>
        <div className='capitalize short-section-fill-dark'>
          {style.slice(0, -5)}
        </div>
        <input
          type='radio'
          checked={styleValue === 'short-section-fill-dark'}
          onChange={() => dispatch(setStyle('short-section-fill-dark'))}
          name={style}
        />
      </div>
      <div className='flex flex-col items-center'>
        <div className='capitalize short-section-fill-light'>
          {style.slice(0, -5)}
        </div>
        <input
          type='radio'
          checked={styleValue === 'short-section-fill-light'}
          onChange={() => dispatch(setStyle('short-section-fill-light'))}
          name={style}
        />
      </div>
    </div>
  );
};

export default ShortSectionStyle;
