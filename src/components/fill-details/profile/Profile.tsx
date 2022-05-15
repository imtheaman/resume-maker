import { useRef, useState } from 'react';
import { useAppSelector } from '../../../store/store';
import Editable from '../../customs/Editable';

const Profile = () => {
  const [imgurl, setImgurl] = useState<string>();
  const theme = useAppSelector(({ ui }) => ui.theme);
  return (
    <div className='col-span-2'>
      <div className='flex w-full items-center'>
        <div className='relative'>
          <img
            src={imgurl}
            className={`absolute ${
              !imgurl && 'bg-gray-100'
            } z-0 top-0 w-36 h-36 object-cover rounded-full`}
          />
          {!imgurl && (
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
                console.dir(url);
                setImgurl(url);
              }
            }}
            className='z-10 file:w-36 file:h-36 opacity-0 file:rounded-full'
          />
        </div>
        <div className='space-y-4 w-full'>
          <div className='flex items-center'>
            <Editable
              as='h2'
              placeholder='PROFILE'
              className='text-2xl font-semibold uppercase flex-grow'
              content='Profile'
            />
            <button
              className={`-skew-x-12 inline-block text-white py-1 px-4 ${theme}`}
              onClick={() => setShowModal(true)}
            >
              <div className='skew-x-12'>Socials</div>
            </button>
          </div>
          <Editable
            as='h3'
            placeholder='Name'
            className='input-primary'
            content=''
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
