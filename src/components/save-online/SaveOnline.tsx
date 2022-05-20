import { useAppSelector } from '../../store/store';
import Skewed from '../customs/Skewed.polymorphic';

const SaveOnline = () => {
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <div className='w-[60rem] space-y-8 bg-white h-[30rem] rounded-lg p-6 flex flex-col items-center justify-center'>
      <h2 className='text-3xl uppercase'>Sign in</h2>
      <div className='flex flex-col space-y-4 w-full max-w-xs'>
        <input
          type='email'
          placeholder='Email'
          className='border rounded-lg text-lg px-4 py-2 outline-none focus:ring-2 ring-gray-200'
        />
        <input
          type='password'
          placeholder='Password'
          className='border rounded-lg text-lg px-4 py-2 outline-none focus:ring-2 ring-gray-200'
        />
        <button className={`text-xl rounded-lg border p-2 text-white ${theme}`}>
          Signin
        </button>
      </div>
      <div>
        <Skewed as='span' className='mr-2 border-2' customBg>
          Don't have an account?{' '}
        </Skewed>
        <Skewed as='button' content='Create One' />
      </div>
    </div>
  );
};

export default SaveOnline;
