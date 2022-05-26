import layoutElement from '../../hooks/useLayout';
import { useAppSelector } from '../../store/store';
import Skewed from '../customs/Skewed.polymorphic';
import Profile from '../templates/template 1/profile';
import Social from '../templates/template 1/social';
import ProfileEdit from './profile/ProfileEdit';

const FillDetails = () => {
  const [resume, layout, screen] = useAppSelector(({ resume, styles, ui }) => [
    resume,
    styles.layout,
    ui.screen
  ]);
  return (
    <>
      <div className={`${screen === 'edit' && 'py-8 px-16'}`}>
        {screen === 'edit' && (
          <h1 className='text-2xl mb-5 font-thin capitalize text-center'>
            <Skewed as='span' content='Your resume details' />
          </h1>
        )}
        {screen === 'edit' ? <ProfileEdit /> : <Profile />}
        {screen === 'resume' && <Social />}
      </div>
      <div className='grid py-8 px-14 grid-cols-2 gap-x-12 gap-y-8'>
        <>
          {layout
            .filter((el) =>
              // @ts-ignore
              screen === 'edit' ? true : resume[el].beingUsed
            )
            .map((el) => layoutElement(el))}
        </>
      </div>
    </>
  );
};

export default FillDetails;
