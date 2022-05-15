import { ReactElement, useState } from 'react';
import { setName, setProfilePic } from '../../../store/profile/profile';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable';
import Modal from '../../modal/Modal';
import Socials from './Socials';

const Profile = () => {
  const [modal, setModal] = useState<ReactElement | false>(false);
  const theme = useAppSelector(({ ui }) => ui.theme);
  const dispatch = useAppDispatch();
  const { profilePic, name } = useAppSelector(({ profile }) => profile);
  return (
    <div className='col-span-2'>
      <div className='flex w-full items-center'>
        <div className='relative'>
          <img
            src={profilePic}
            className={`absolute ${
              !profilePic && 'bg-gray-100'
            } z-0 top-0 w-36 h-36 object-cover rounded-full`}
          />
          {!profilePic && (
            <span className='absolute top-1/2 -translate-y-1/2 left-11'>
              choose
            </span>
          )}
          <input
            type='file'
            accept='image/*'
            onChange={(e) => {
              if (e.target.files) {
                const url = URL.createObjectURL(e.target.files[0]);
                dispatch(setProfilePic(url));
              }
            }}
            className='z-10 file:w-36 file:h-36 opacity-0 file:rounded-full'
          />
        </div>
        <div className='space-y-4 w-full'>
          <div className='flex items-center'>
            <h2 className='flex-grow h2'>Profile</h2>
            <button
              className={`-skew-x-12 inline-block text-white py-1 px-4 ${theme}`}
              onClick={() => setModal(<Socials />)}
            >
              <div className='skew-x-12'>Socials</div>
            </button>
            {modal && <Modal modal={modal} setModal={setModal} />}
          </div>
          <Editable
            as='h3'
            placeholder='Name'
            className='input-primary'
            content={name}
            onBlur={(e: BlurEvent) => dispatch(setName(e.target.innerText))}
          />
          <Editable
            as='h3'
            placeholder='Your short intro'
            className='input-primary'
            content=''
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
