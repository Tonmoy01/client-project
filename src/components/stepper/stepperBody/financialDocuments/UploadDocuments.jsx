const UploadDocuments = () => {
  return (
    <div className='card w-full bg-base-100 shadow-2xl'>
      <div className='card-body'>
        <h1 className='font-semibold text-2xl upload-header'>
          Upload your Credit Counseling{' '}
        </h1>
        <p className='text-sm font-normal text-[#64748B] text-center'>
          Credit Counseling shows that you are taking the process of getting
          your Finances in order <br /> seriously and is required by the court
          to move forward.
        </p>

        <form>
          <div className='grid grid-flow-col grid-cols-4 gap-4'>
            <div className='form-control w-full col-span-2'>
              <label className='label'>
                <span className='label-text font-bold'>Credit Counselor</span>
              </label>
              <select className='select select-bordered'>
                <option>Choose your provider</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className='form-control w-full col-span-2'>
              <label className='label'>
                <span className='label-text font-bold'>Certificate Number</span>
              </label>
              <input
                type='text'
                placeholder='eg. 1A2B3C4D-555'
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <input
            type='file'
            placeholder='choose'
            className='file-input file-input-bordered w-full h-20 mt-4'
          />

          <div className='card-actions justify-start mb-[-32px] mt-8'>
            <button className='btn bg-[#172B4D] hover:bg-gray-900 text-white'>
              I have not completed yet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadDocuments;
