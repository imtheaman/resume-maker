import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Social } from '../../../vite-env';

const SocialItem: React.FC<{
  icon: IconProp;
  placeholder: string;
  social: Social;
  color?: string;
  dispatchEvent: ActionCreatorWithPayload<string, string>;
}> = ({ icon, placeholder, social, dispatchEvent, color }) => {
  const account = useAppSelector(({ profile }) => profile.socials?.[social]);
  const dispatch = useAppDispatch();

  const HandleInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(dispatchEvent(e.target.value));
  return (
    <div className='flex justify-center items-center'>
      <FontAwesomeIcon
        icon={icon}
        className={`aspect-square h-8 mr-4 ${color ? color : 'text-gray-600'}`}
      />
      <input
        className='p-2 text-gray-500 text-lg hover:ring-4 outline-none focus:ring-4 focus:ring-blue-100 hover:ring-blue-100 border rounded-md'
        placeholder={placeholder}
        value={account}
        onChange={HandleInput}
      />
    </div>
  );
};

export default SocialItem;
