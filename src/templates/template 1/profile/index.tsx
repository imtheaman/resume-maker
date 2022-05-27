import { useAppSelector } from '../../../../store/store';

const Profile = () => {
  const { intro, name, profilePic } = useAppSelector(({ profile }) => profile);
  return (
    <div className='flex items-center px-16 py-10 border-b'>
      {profilePic ? (
        <img
          src={profilePic}
          alt='image invalidated, reupload'
          className='z-0 top-0 w-28 h-28 object-cover border rounded-full'
        />
      ) : null}
      <div>
        <h1
          className={`${
            name ? 'text-gray-800' : 'text-gray-500'
          } text-4xl font-semibold`}
        >
          {name ? name : 'Full Name'}
        </h1>
        <h3 className={`text-2xl ${intro ? 'text-gray-600' : 'text-gray-400'}`}>
          {intro ? intro : 'Your short intro'}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
