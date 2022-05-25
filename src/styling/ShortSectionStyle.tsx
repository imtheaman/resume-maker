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
    </div>
  );
};

export default ShortSectionStyle;
