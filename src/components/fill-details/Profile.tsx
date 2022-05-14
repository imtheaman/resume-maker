import Editable from '../customs/Editable';

const Profile = () => {
  return (
    <div className='col-span-2'>
      <Editable
        as='h2'
        placeholder='PROFILE'
        className='h2'
        content='Profile'
      />
      <Editable
        as='h3'
        placeholder='Name'
        className='input-primary'
        content=''
      />
    </div>
  );
};

export default Profile;
