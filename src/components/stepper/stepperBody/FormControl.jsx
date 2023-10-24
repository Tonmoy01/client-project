import React from 'react';

const FormControl = () => {
  return (
    <div className='col-span-2'>
      <div className='card w-9/12 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='card-actions'>
            <h1 className='text-2xl font-semibold info-header'>
              Personal Information
            </h1>
            <form>
              <div className='grid grid-flow-col grid-cols-3 gap-4'>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>First Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='John'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>Middle Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Smith'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>Last Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Doe'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-3'>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>Suffix</span>
                  </label>
                  <input
                    type='text'
                    placeholder='jr., sr., III'
                    className='input input-bordered w-full'
                  />
                </div>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>Aliases</span>
                  </label>
                  <input
                    type='text'
                    placeholder='JD, Jack, etc.'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-3'>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>Date of Birth</span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Please Select your DOB</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>Mobile Phone</span>
                  </label>
                  <input
                    type='text'
                    placeholder='(555) 555-1212'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-4 gap-4 mt-3'>
                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Living Situation
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Choose Own/Rent/Other</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>

                <div className='form-control col-span-2 w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Moved in the past two years
                    </span>
                  </label>
                  <select className='select select-bordered'>
                    <option>Yes/No</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>

              <div>
                <h1 className='mt-3 font-bold'>Home Address</h1>
                <p className='pt-4 text-sm font-normal text-[#64748B]'>
                  Is your mailing address the same as your Home Address?
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

              <div className='grid grid-flow-col gap-4 mt-3'>
                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>Street Address</span>
                  </label>
                  <input
                    type='text'
                    placeholder='123 Main St'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col gap-4 mt-3'>
                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text font-bold'>
                      Street Address Line 2
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='Apt 311'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-3 gap-4 mt-3'>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>City</span>
                  </label>
                  <input
                    type='text'
                    placeholder='New Town'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>State</span>
                  </label>
                  <input
                    type='text'
                    placeholder='SC'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
                <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                    <span className='label-text font-bold'>Zip</span>
                  </label>
                  <input
                    type='text'
                    placeholder='12121'
                    className='input input-bordered w-full max-w-xs'
                  />
                </div>
              </div>

              <div className='mt-5'>
                <h1 className='font-bold'>Mailing Address</h1>
                <p className='pt-4 text-sm font-normal text-[#64748B]'>
                  Same as Home Address.
                </p>
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

export default FormControl;
