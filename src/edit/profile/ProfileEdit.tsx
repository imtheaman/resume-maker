import { ReactElement, useState } from 'react';
import { setIntro, setName, setProfilePic } from '../../../store/profile';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable.polymorphic';
import Modal from '../../modal/Modal';
import Socials from './Socials';
import Skewed from '../../customs/Skewed.polymorphic';
import parse from 'html-react-parser'

const ProfileEdit = () => {
  const [modal, setModal] = useState<ReactElement | false>(false);
  const dispatch = useAppDispatch();
  const { profilePic, name, intro, socials } = useAppSelector(
    ({ profile }) => profile
  );
  const capitalize = (value: string | undefined) => {
    if (!value) return '';
    const words = value.trim().split(' ');
    const capitalized: string[] = [];
    words.forEach((el) => {
      capitalized.push(el[0].toUpperCase() + el.slice(1, el.length));
    });
    return capitalized.join(' ');
  };
  return (
    <div className='flex w-full items-center'>
      <div className='relative rounded-full'>
        <img
          src={profilePic}
          alt={profilePic && 'image invalidated, reupload'}
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
          title=''
          onChange={(e) => {
            if (e.target.files) {
              const url = URL.createObjectURL(e.target.files[0]);
              dispatch(setProfilePic(url));
            }
          }}
          className='z-10 file:w-36 file:h-36 opacity-0 file:rounded-full'
        />
      </div>
      <div className='space-y-3 w-full'>
        <div className='flex items-center'>
          <Editable
            as='h3'
            placeholder='Full Name'
            className='flex-grow text-4xl font-semibold'
            content={parse(name)}
            onBlur={(e: BlurEvent) =>
              dispatch(setName(capitalize(e.target.innerText)))
            }
          />
          <Skewed
            as='button'
            content='Socials'
            //@ts-ignore
            onClick={() => setModal(<Socials />)}
          />
          {modal && <Modal modal={modal} setModal={setModal} />}
        </div>
        <Editable
          as='h3'
          placeholder='Your short intro'
          className='text-2xl'
          content={parse(intro)}
          onBlur={(e: BlurEvent) =>
            dispatch(setIntro(capitalize(e.target.innerText)))
          }
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
