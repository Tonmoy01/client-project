import React from 'react';

const AdditionalPersonalInfo = () => {
  return (
    <div className='col-span-2'>
      <div className='card w-9/12 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='card-actions'>
            <h1 className='text-2xl font-semibold info-header'>
              Additional Personal Information
            </h1>
            <form className='w-full'>
              <div className='grid grid-flow-col grid-cols-4 gap-4'>
                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-normal text-base'>
                      Marital Status
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Please Select your status</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-normal text-base'>
                      Number of Dependents
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='2'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div>
                <h1 className='mt-3 font-normal text-base'>Self-Employment</h1>
                <p className='pt-4 text-sm font-normal text-[#64748B]'>
                  Have you been self-employed in the last 2 years?
                </p>
                <div className='form-control flex flex-row items-center mt-5'>
                  <input
                    type='checkbox'
                    defaultChecked='checked'
                    className='checkbox checkbox-primary col-span-1'
                  />
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Yes</span>
                  </label>
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 mt-3'>
                <div className='form-control col-span-4 w-full'>
                  <label className='label'>
                    <span className='label-text text-sm font-normal text-[#64748B]'>
                      If yes, please provide your EIN Number
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='12121212'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div
                className='grid grid-flow-col grid-cols-4 gap-4 mt-5
              '
              >
                <div className='col-span-2'>
                  <h1 className='mt-3 font-normal text-base'>
                    Prior Bankrupcy
                  </h1>
                  <p className='pt-4 text-sm font-normal text-[#64748B]'>
                    Filed for bankruptcy in the last 2 years?
                  </p>
                  <div className='form-control flex flex-row items-center mt-5'>
                    <input
                      type='checkbox'
                      defaultChecked='checked'
                      className='checkbox checkbox-primary col-span-1'
                    />
                    <label className='label cursor-pointer'>
                      <span className='label-text'>Yes</span>
                    </label>
                  </div>
                </div>

                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text text-sm font-normal text-[#64748B]'>
                      If yes, what chapter
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Please select the chapter</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-3'>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Approximate filing date
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Please select date</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>

              <div>
                <h1 className='mt-5 font-bold'>
                  Rent/Mortgage & Living Situation
                </h1>
                <p className='pt-4 text-sm font-normal text-[#64748B]'>
                  Are you facing eviction or foreclosure
                </p>
                <div className='form-control flex flex-row items-center mt-5'>
                  <input
                    type='checkbox'
                    defaultChecked='checked'
                    className='checkbox checkbox-primary col-span-1'
                  />
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Yes</span>
                  </label>
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 mt-5'>
                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Estimated number of creditors owed
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='12'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-5'>
                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Estimated Secured Debt
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='15,000.00'
                    className='input input-bordered w-full'
                  />
                </div>

                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Estimated Unsecured Debt
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='15,000.00'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-3'>
                <div className='form-control w-full col-span-4'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Do you have a bankruptcy attorney?
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Please select yes/no</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <p className='pt-4 text-sm font-normal text-[#64748B]'>
                If you have an attorney, please provide their name and email
                address
              </p>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-5'>
                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-bold'>Attorney Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='John Doe, Esq.'
                    className='input input-bordered w-full'
                  />
                </div>

                <div className='form-control w-full col-span-2'>
                  <label className='label'>
                    <span className='label-text font-bold'>Attorney Email</span>
                  </label>
                  <input
                    type='text'
                    placeholder='jdoe@example.com'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <button className='btn w-full mt-5 bg-[#182b4d] text-white'>
                Save & Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalPersonalInfo;
