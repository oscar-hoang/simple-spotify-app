import React from 'react';
import urlAuth from '../spotify';

const buttonStyle = `
  flex items-center justify-center
  p-4 mx-auto w-max bg-white hover:bg-gray-600
  text-black hover:text-white border-black
  border-2 rounded-full font-medium
  transition duration-300 ease-in-out
`;

const Login = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='w-login'>
          <a href={urlAuth} className={`${buttonStyle}`}>
            Login with Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
