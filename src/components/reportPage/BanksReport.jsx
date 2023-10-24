import React from 'react';

const BanksReport = () => {
  return (
    <div className='w-4/5 m-auto mt-24'>
      <h1 className='font-semibold text-3xl mb-8'>My BanksZ Report</h1>

      <div className='flex gap-10 justify-between border-b-2 pb-10'>
        <div>
          <h4 className='font-semibold text-xl'>
            All your information/details
          </h4>
          <p className='font-normal text-sm text-[#64748B]'>
            Please Review and make sure it is accurate and current
          </p>
        </div>

        <div className='button btn bg-[#1E293B] text-white hover:bg-slate-950'>
          <i className='fa fa-download'></i>{' '}
          <input type='button' value='Download' />
        </div>
      </div>

      <div className='flex gap-10 pt-10'>
        <div className='info grow-0'>
          <h4 className='font-medium text-md'>Personal Information</h4>
          <p className='text-sm font-normal text-[#647488]'>
            We’ll credit your account if you need to downgrade during the
            billing cycle.
          </p>
        </div>

        <div className='card grow pb-10'>
          <div className='card w-full bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title font-bold text-xl'>About</h2>

              <form>
                <div className='grid grid-flow-col grid-cols-12 gap-4'>
                  <div className='form-control col-span-4 w-full max-w-xs'>
                    <label className='label'>
                      <span className='label-text font-bold'>First Name</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John'
                      className='input input-bordered w-full max-w-xs'
                    />
                  </div>
                  <div className='form-control col-span-4 w-full max-w-xs'>
                    <label className='label'>
                      <span className='label-text font-bold'>Middle Name</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John'
                      className='input input-bordered w-full max-w-xs'
                    />
                  </div>
                  <div className='form-control col-span-4 w-full max-w-xs'>
                    <label className='label'>
                      <span className='label-text font-bold'>Last Name</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John'
                      className='input input-bordered w-full max-w-xs'
                    />
                  </div>
                </div>
                <div className='grid grid-flow-col grid-cols-12 gap-4'>
                  <div className='form-control col-span-6 w-full'>
                    <label className='label'>
                      <span className='label-text font-bold'>Suffix</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John'
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div className='form-control col-span-6 w-full'>
                    <label className='label'>
                      <span className='label-text font-bold'>Alias</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John'
                      className='input input-bordered w-full'
                    />
                  </div>
                </div>
                <div className='grid grid-flow-col grid-cols-12 gap-4'>
                  <div className='form-control col-span-4 w-full'>
                    <label className='label'>
                      <span className='label-text font-bold'>
                        Number of Dependents
                      </span>
                    </label>
                    <input
                      type='password'
                      placeholder='******'
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div className='form-control col-span-4 w-full'>
                    <label className='label'>
                      <span className='label-text font-bold'>
                        Marital Status
                      </span>
                    </label>
                    <input
                      type='password'
                      placeholder='******'
                      className='input input-bordered w-full'
                    />
                  </div>
                  <div className='form-control col-span-4 w-full'>
                    <label className='label'>
                      <span className='label-text font-bold'>
                        Prior Bankrruptcy
                      </span>
                    </label>
                    <input
                      type='text'
                      placeholder='Yes/No If yes, What Chapter and est. Date'
                      className='input input-bordered w-full'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanksReport;
