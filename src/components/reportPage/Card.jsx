import React from 'react';

const Card = () => {
  return (
    <div className='flex justify-center gap-8'>
      <div className='card w-80 shadow-xl glass mt-[-80px] rounded-md'>
        <div className='card-body gap-5'>
          <div className='bg-white rounded-md w-8 p-2 flex items-center justify-center'>
            <i className='fa fa-university' aria-hidden='true'></i>
          </div>
          <p className='text-sm text-[#64748B]'>Legal Fees</p>
          <h2 className='card-title'>Make Payment</h2>
        </div>
      </div>

      <div className='card w-80 shadow-xl glass mt-[-80px] rounded-md'>
        <div className='card-body gap-5'>
          <div className='bg-white rounded-md w-8 p-2 flex items-center justify-center'>
            <i className='fa fa-envelope-open' aria-hidden='true'></i>
          </div>
          <p className='text-sm text-[#64748B]'>My Documents</p>
          <h2 className='card-title'>Upload Docs</h2>
        </div>
      </div>

      <div className='card w-80 shadow-xl glass mt-[-80px] rounded-md'>
        <div className='card-body gap-5'>
          <div className='bg-white rounded-md w-8 p-2 flex items-center justify-center'>
            <i className='fa fa-users' aria-hidden='true'></i>
          </div>
          <p className='text-sm text-[#64748B]'>Tasks</p>
          <h2 className='card-title'>To Do</h2>
        </div>
      </div>

      <div className='card w-80 shadow-xl glass mt-[-80px] rounded-md'>
        <div className='card-body gap-5'>
          <div className='bg-white rounded-md w-8 p-2 flex items-center justify-center'>
            <i className='fa fa-credit-card-alt' aria-hidden='true'></i>
          </div>
          <p className='text-sm text-[#64748B]'>
            Generate (this must be locked)
          </p>
          <h2 className='card-title'>Creditor Matrix</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
