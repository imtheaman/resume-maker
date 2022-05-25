const Signin = () => {
  return (
    <>
      <input
        type='email'
        placeholder='Email'
        className='border rounded-lg text-lg px-4 py-2 outline-none focus:ring-4 hover:ring-4 hover:ring-gray-200 focus:ring-gray-200'
      />
      <input
        type='password'
        placeholder='Password'
        className='border rounded-lg text-lg px-4 py-2 outline-none focus:ring-4 hover:ring-4 hover:ring-gray-200 focus:ring-gray-200'
      />
    </>
  );
};

export default Signin;
