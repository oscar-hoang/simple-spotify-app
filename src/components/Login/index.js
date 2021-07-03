import React from 'react';

const buttonStyle = `
  flex items-center justify-center
  p-4 mx-auto w-max bg-white hover:bg-gray-600
  text-black hover:text-white border-black
  border-2 rounded-full
  transition duration-300 ease-in-out
`;

const Login = () => {
  return (
    <div className='w-login'>
      <button className={`${buttonStyle}`}>
        <p className='font-medium'>Login with Spotify</p>
      </button>
    </div>
  );
};

export default Login;
