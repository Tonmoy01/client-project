import './profileHeader.css';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';

const StepsToTake = () => {
  return (
    <>
      <div className='top'>
        <div className='grid grid-flow-col grid-cols-2 w-4/5 m-auto gap-10'>
          <div className='flex items-center justify-center'>
            <div className='card w-4/5 bg-base-100 shadow-2xl mt-10'>
              <div className='card-body'>
                <div className='card-actions'>
                  <div className='flex flex-col'>
                    <h4 className='font-semibold text-xl'>Steps to take</h4>
                    <p className='text-sm font-normal text-[#64748B]'>
                      In order to help you acheive a fresh start, we encourage{' '}
                      <br /> you to complete the following as fast as possible!
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5'>
                  <div className='left flex items-center gap-10 w-full'>
                    <div className='icon'>
                      <i
                        className='fa fa-check text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-sm text-[#67748E] font-normal'>
                        Pay Legal Fees
                      </h6>
                      <p className='text-xs text-[#67748E]'>
                        Court filing fees & Attorney fees
                      </p>
                    </div>
                  </div>
                  <div className='right flex w-full justify-end gap-5 items-center'>
                    <div className='tag bg-[#CDF59B] text-[#67B108] px-3 py-1 rounded-md text-center'>
                      Completed
                    </div>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5'>
                  <div className='left flex items-center gap-10 w-full'>
                    <div className='icon'>
                      <i
                        className='fa fa-check text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-sm text-[#67748E] font-normal'>
                        Pay Legal Fees
                      </h6>
                      <p className='text-xs text-[#67748E]'>
                        Court filing fees & Attorney fees
                      </p>
                    </div>
                  </div>
                  <div className='right flex w-full justify-end gap-5 items-center'>
                    <div className='tag bg-[#CDF59B] text-[#67B108] px-3 py-1 rounded-md text-center'>
                      Completed
                    </div>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5'>
                  <div className='left flex items-center gap-10'>
                    <div className='icon'>
                      <i
                        className='fa fa-times text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-sm text-[#67748E] font-normal'>
                        Pay Legal Fees
                      </h6>
                      <p className='text-xs text-[#67748E]'>
                        Court filing fees & Attorney fees
                      </p>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5'>
                  <div className='left flex items-center gap-10'>
                    <div className='icon'>
                      <i
                        className='fa fa-times text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-sm text-[#67748E] font-normal'>
                        Upload PayStubs/Docs
                      </h6>
                      <p className='text-xs text-[#67748E]'>
                        These must remain current
                      </p>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5'>
                  <div className='left flex items-center gap-10'>
                    <div className='icon'>
                      <i
                        className='fa fa-times text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-sm text-[#67748E] font-normal'>
                        Verify your BanksZ Info
                      </h6>
                      <p className='text-xs text-[#67748E]'>
                        Your report contains all your financial info
                      </p>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5 border-t-[1px]'>
                  <div className='left flex items-center gap-10 mt-5'>
                    <div className='icon'>
                      <i
                        className='fa fa-lock text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-base text-[#67748E] font-normal'>
                        Generate Court Forms
                      </h6>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-10 ml-5 mt-5 border-t-[1px]'>
                  <div className='left flex items-center gap-10 mt-5'>
                    <div className='icon'>
                      <i
                        className='fa fa-lock text-[#67748E]'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='title max-w-[236px] w-full'>
                      <h6 className='text-base text-[#67748E] font-normal'>
                        Case Updates/Reminders
                      </h6>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='button text-[#CB0C9F] text-sm font-normal transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-110 duration-300  '>
                      See More{' '}
                      <i className='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-1 mt-10'>
            <div className='flex flex-col gap-8 items-center justify-center'>
              <input
                type='file'
                className='file-input file-input-bordered w-3/5 h-56'
              />
              <div className='card w-96 text-white shadow-xl balance-card'>
                <div className='card-body'>
                  <h2 className='card-title'>
                    <span className='font-semibold text-xl'>$</span>{' '}
                    <span className='text-4xl font-bold'>300</span>
                  </h2>
                  <p className='font-normal text-sm text-gray-100'>
                    Your current balance
                  </p>
                  <p className='font-normal text-sm text-green-600'>
                    Total Paid: $1010
                  </p>
                  <div className='card-actions my-8'>
                    <button className='btn h-9 w-full text-[#172B4D] font-bold text-xs'>
                      Buy Now
                    </button>
                  </div>
                  <div className='flex gap-8 justify-between items-center'>
                    <div className='left'>
                      <div className='order text-sm'>Orders: 60%</div>
                      <progress
                        className='progress bg-white progress-warning w-28 h-1'
                        value='60'
                        max='100'
                      ></progress>
                    </div>
                    <div className='right'>
                      <div className='sales text-sm'>Sales: 40%</div>
                      <progress
                        className='progress bg-white progress-success w-28 h-1'
                        value='40'
                        max='100'
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom flex justify-center items-center my-12'>
        <div className='card w-[72%] bg-base-100 shadow-2xl'>
          <div className='card-body'>
            <h2 className='card-title font-semibold text-base'>Resources</h2>
            <p className='text-sm text-[#67748E] font-normal'>
              Here you will find helpful guides and resources
            </p>
          </div>
          <div className='img-card flex justify-between items-center px-12 gap-8'>
            <div className='card-details w-[425px]'>
              <div className='relative'>
                <figure>
                  <img src={bg1} alt='bg1' className='w-full' />
                </figure>
                <div className='img-body flex justify-between w-80 m-auto p-4 glass rounded-md text-white absolute bottom-2 left-10'>
                  <p className='text-black text-sm font-normal'>Watch Video</p>
                  <p className='text-black text-sm font-normal'>Growth</p>
                </div>
              </div>
              <div className='title mt-4'>
                <h1 className='font-semibold text-2xl'>Credit Counseling</h1>
                <p className='font-normal text-base text-[#67748E] py-5'>
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p>
                <p className='pb-5 font-medium text-base'>
                  Read Post{' '}
                  <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </p>
              </div>
            </div>
            <div className='card-details relative w-[425px]'>
              <div className='relative'>
                <figure>
                  <img src={bg2} alt='bg2' className='w-full' />
                </figure>
                <div className='img-body flex justify-between w-80 m-auto p-4 glass rounded-md text-white absolute bottom-2 left-10'>
                  <p className='text-black text-sm font-normal'>Watch Video</p>
                  <p className='text-black text-sm font-normal'>Education</p>
                </div>
              </div>
              <div className='title mt-4'>
                <h1 className='font-semibold text-2xl'>
                  Check your free credit report
                </h1>
                <p className='font-normal text-base text-[#67748E] py-5'>
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p>
                <p className='pb-5 font-medium text-base'>
                  Read Post{' '}
                  <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </p>
              </div>
            </div>

            <div className='card-details w-[425px]'>
              <input
                type='file'
                className='file-input file-input-bordered w-full h-[416px] mb-7'
              />
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-20 font-semibold text-xl text-[#67748E]'>
        QUESTIONS? ASK BANKSZ! Here for you 24/7
      </p>
    </>
  );
};

export default StepsToTake;
