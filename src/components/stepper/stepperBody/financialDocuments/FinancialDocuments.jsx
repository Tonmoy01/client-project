import React from 'react';
import UploadDocuments from './UploadDocuments';
import ReportAndSlip from './ReportAndSlip';

const FinancialDocuments = () => {
  return (
    // <div className='w-[55%] m-auto mt-10'>
    <div className='grid place-content-center my-8'>
      <h1 className='text-xl font-bold'>
        Upload your financial documents for faster results!
      </h1>
      <p className='text-sm font-normal text-[#64748B] mt-3 mb-7'>
        Here you can set all the personal details.
      </p>

      <UploadDocuments />
      <ReportAndSlip
        title={'Upload your recent Credit Report'}
        afterTitle={'Let us do the tedious work for you!'}
        subTitle={
          'Instead of spending of spending countless hours filing out forms and figures simply upload'
        }
        afterSubTitle={'your Credit Report. We do the rest.'}
        btnText={'Scan Credit Report'}
      />

      <ReportAndSlip
        title={'Upload your most recent Pay Slips'}
        afterTitle={
          'Pay Slips (Pay Stubs) are needed by many entities for processing. We also use the data to'
        }
        subTitle={' help you budget and meet your financial goals.'}
        btnText={'Scan Pay Slips'}
      />

      <div className='card-actions justify-end mr-[-60px] my-14'>
        <button className='btn bg-[#172B4D] text-white w-[90px] hover:bg-slate-900'>
          Next
        </button>
      </div>
    </div>
  );
};

export default FinancialDocuments;
