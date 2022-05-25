import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Styles } from '../../vite-env';
import Skewed from '../customs/Skewed.polymorphic';

const ItemStyle: React.FC<{
  styleType: string;
  style: Styles[number];
  setStyle: ActionCreatorWithPayload<string, string>;
}> = ({ styleType, setStyle, style }) => {
  const styleValue = useAppSelector(({ styles }) => styles[style]);
  const dispatch = useAppDispatch();
  const HandleEmoji = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value;
  };
  return (
    <>
      <div className='max-w-xl w-full flex items-center pb-6 border-b justify-between'>
        <Skewed as='span'>{styleType}</Skewed>
        <ul className='flex items-end space-x-3 scale-125'>
          <div className=''>
            <li className='flex flex-col items-end list-style-square'></li>
            <input
              name='list-style'
              checked={styleValue === 'list-style-square'}
              type='radio'
              onChange={() => dispatch(setStyle('list-style-square'))}
            />
          </div>
          <div>
            <li className='flex flex-col items-end list-style-square-border'></li>
            <input
              name='list-style'
              checked={styleValue === 'list-style-square-border'}
              type='radio'
              onChange={(e) => console.log(e)}
            />
          </div>
          <div>
            <li className='flex flex-col items-end list-style-circle'></li>
            <input
              name='list-style'
              checked={styleValue === 'list-style-circle'}
              type='radio'
            />
          </div>
          <div>
            <li className='flex flex-col items-end list-style-circle-border'></li>
            <input
              name='list-style'
              checked={styleValue === 'list-style-circle-border'}
              type='radio'
            />
          </div>
          <div>
            <li className='flex flex-col items-end custom-list-style-arrow'></li>
            <input
              name='list-style'
              checked={styleValue === 'custom-list-style-arrow'}
              type='radio'
            />
          </div>
          <div>
            <li className='flex flex-col items-end  custom-list-style-dash'></li>
            <input
              name='list-style'
              checked={styleValue === 'custom-list-style-dash'}
              type='radio'
            />
          </div>
        </ul>
        <div className='flex flex-col items-end -mt-[0.2rem] scale-150'>
          <input
            type='text'
            placeholder='custom emoji'
            // before:content-["💯"]
            defaultValue={
              styleValue && styleValue.startsWith('before:')
                ? styleValue.slice(17, -2)
                : ''
            }
            className='flex flex-col text-xs items-end px-2 py-1 border outline-none w-24 rounded-md h-6'
            onChange={HandleEmoji}
            title='use (Win + Period) to select'
          />
        </div>
      </div>
    </>
  );
};

export default ItemStyle;
