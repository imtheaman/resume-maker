import { forwardRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setSpellCheck } from '../../store/ui/uiSlice';
import SwitchCheckbox from '../customs/SwitchCheckbox';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const { spellCheck, theme } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  return (
    <header
      ref={ref}
      className={`flex justify-center z-[11] text-white px-4 md:px-20 py-6 ${theme} w-full`}
    >
      <div className='max-w-[1340px] flex-grow flex justify-between items-center'>
        <h1 className='md:text-3xl select-none italic'>
          Resume Maker
        </h1>
        <div className='flex items-center space-x-4'>
          <SwitchCheckbox
            name='Spell Check'
            fontSize='21px'
            fontWeight='100'
            onChange={() => dispatch(setSpellCheck(!spellCheck))}
            defaultChecked={spellCheck}
          />
        </div>
      </div>
    </header>
  );
});

export default Header;
