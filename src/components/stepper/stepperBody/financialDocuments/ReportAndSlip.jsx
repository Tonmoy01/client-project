import React from 'react';

const ReportAndSlip = ({
  title,
  afterTitle,
  subTitle,
  afterSubTitle,
  btnText,
}) => {
  return (
    <div className='card w-full bg-base-100 shadow-2xl mt-8'>
      <div className='card-body'>
        <h1 className='font-semibold text-2xl upload-header'>{title}</h1>
        <p className='text-sm font-normal text-[#64748B] text-center'>
          {afterTitle}
          <span className='block'>{subTitle}</span>
          {afterSubTitle}
        </p>

        <form>
          <div className='grid grid-flow-col grid-cols-4 gap-4'>
            <div className='form-control w-full col-span-4'>
              <input
                type='file'
                placeholder='choose'
                className='file-input file-input-bordered w-full h-20 mt-4'
              />

              <div className='card-actions mt-8'>
                <button className='btn bg-[#172B4D] hover:bg-gray-900 text-white w-full'>
                  {btnText}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportAndSlip;
