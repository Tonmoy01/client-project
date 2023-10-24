import React from 'react';

const FinalScreen = () => {
  return (
    <div className='w-4/5 m-auto'>
      <h1 className='text-3xl font-bold '>
        Thank you, Ms / Mr.Musk for all your hard work! You <br /> are ready for
        success and a fresh start!
      </h1>

      <p className='text-sm font-normal text-[#64748B] mt-32'>
        Here is a summary and what you will still need to complete in order to
        file your case! <br />
        Please keep all your information up to-date! And remember, if you have
        questions, you can ask BanksZ 24/7.{' '}
      </p>

      <div className='grid grid-cols-4'>
        <div className='col-span-2'>
          <div className='form-control w-96 col-span-2'>
            <label className='label'>
              <span className='label-text font-bold'>First Name</span>
            </label>
            <input
              type='text'
              placeholder='eg. Michael'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control w-96 col-span-2 mt-7'>
            <label className='label'>
              <span className='label-text font-bold'>Company</span>
            </label>
            <input
              type='text'
              placeholder='eg. Creative Tim'
              className='input input-bordered w-full'
            />
          </div>
        </div>
      </div>

      <div className='card-actions justify-end mb-[-32px] mt-8'>
        <button className='btn bg-[#172B4D] hover:bg-gray-900 text-white'>
          My profile -&gt;
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
