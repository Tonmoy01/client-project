import React from 'react';

const SideBar = () => {
  return (
    <div className='col-span-1'>
      <h4 className='text-base font-medium'>Add your details</h4>
      <p className='pt-4 text-sm font-normal text-[#64748B]'>
        We will create your account and help you reach financial freedom <br />
        with speed and ease!
      </p>
      <div className='flex flex-col pt-4'>
        <div className='flex items-center pt-4'>
          <p className='bg-[#55a6f8] w-10 h-10 flex justify-center items-center rounded-full text-white border-2 border-[#707f94]'>
            1
          </p>{' '}
          <p className='pl-4 font-bold'>Personal Info</p>
        </div>
        <div className='flex items-center pt-4'>
          <p className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-[#707f94] text-[#707f94]'>
            2
          </p>{' '}
          <p className='pl-4'>Overview</p>
        </div>
        <div className='flex items-center pt-4'>
          <p className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-[#707f94] text-[#707f94]'>
            3
          </p>{' '}
          <p className='pl-4'>Identity Verification</p>
        </div>
        <div className='flex items-center pt-4'>
          <p className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-[#707f94] text-[#707f94]'>
            4
          </p>{' '}
          <p className='pl-4'>Upload Financial Documents</p>
        </div>
        <div className='flex items-center pt-4'>
          <p className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-[#707f94] text-[#707f94]'>
            5
          </p>{' '}
          <p className='pl-4'>Finalize and Generate</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
