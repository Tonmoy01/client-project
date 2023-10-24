import './profileHeader.css';
import avatar from '../../assets/avatar.avif';

const ProfileHeader = () => {
  return (
    <div className='w-full h-44 profile-header'>
      <div className='w-4/5 m-auto'>
        <div className='grid grid-flow-col grid-cols-2'>
          <div className='col-span-1'>
            <div className='flex gap-8'>
              <img
                src={avatar}
                className='h-40 w-40 border-4 border-white rounded-full'
              />
              <div className='flex flex-col justify-end'>
                <h1 className='font-semibold text-3xl'>Noah Mclaren</h1>
                <p className='text-sm font-normal text-[#64748B]'>
                  noah_mclaren@mail.com{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col justify-end h-full'>
              <div className='ml-auto'>
                <button className='btn mr-4'>Docs</button>
                <button className='btn btn-neutral'>Not Sure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
