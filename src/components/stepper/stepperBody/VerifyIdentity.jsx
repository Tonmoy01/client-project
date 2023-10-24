const VerifyIdentity = () => {
  return (
    <div className='w-[55%] m-auto mt-10'>
      <h1 className='text-xl font-bold'>Add your details</h1>
      <p className='text-sm font-normal text-[#64748B]'>
        Here you can set all the personal details.
      </p>

      <div className='w-3/5 m-auto mt-16'>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body'>
            <div className='card-actions'>
              <h1 className='verify-header font-semibold text-2xl pb-5'>
                Verify your Identity
              </h1>
              <p className='text-sm font-normal text-[#64748B] text-center pb-5'>
                We verify your identity using the latest in facial recognition
                and document verification. This step is essential to prevent
                fraud and to ensure your security.
              </p>
            </div>
            <button className='btn w-full bg-[#172B4D] text-white hover:bg-slate-900'>
              Verify Now
            </button>
          </div>
        </div>
        <div className='card-actions justify-end mr-[-60px] my-14'>
          <button className='btn bg-[#172B4D] text-white w-[90px] hover:bg-slate-900'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyIdentity;
