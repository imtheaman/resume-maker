import { lazy, Suspense, useState } from 'react';
import { useAppSelector } from '../../store/store';
import Skewed from '../customs/Skewed.polymorphic';
import Loader from '../loader';
import Signin from './Signin';
const Signup = lazy(() => import('./Signup'));

const SaveOnline = () => {
  const theme = useAppSelector(({ ui }) => ui.theme);
  const [signin, setSignin] = useState(true);
  return (
    <div
      className={`w-[60rem] space-y-8 bg-white ${
        signin ? 'h-[30rem]' : 'h-[35rem]'
      } rounded-lg p-6 flex flex-col items-center justify-center`}
    >
      <h2 className='text-3xl'>{signin ? 'Sign in' : 'Sign Up'}</h2>
      <div className='flex flex-col space-y-5 w-full max-w-xs'>
        <Suspense fallback={<Loader />}>
          {signin ? <Signin /> : <Signup />}
        </Suspense>
        <button className={`text-xl rounded-lg border p-2 text-white ${theme}`}>
          {signin ? 'Signin' : 'Signup'}
        </button>
      </div>
      <div>
        <Skewed as='span' className='mr-2 border-2' customBg>
          {signin ? "Don't have an account?" : 'Already have an account?'}{' '}
        </Skewed>
        <Skewed
          as='button'
          content={signin ? 'Create One' : 'Sign In'}
          // @ts-ignore
          onClick={() => setSignin((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default SaveOnline;
