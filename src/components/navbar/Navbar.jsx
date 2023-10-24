import avatar from '../../assets/avatar.avif';

const Navbar = () => {
  return (
    <div className='navbar bg-[#051226]'>
      <div className='w-4/5 m-auto text-white'>
        <div className='flex-1'>
          <div className='flex gap-16'>
            <a className='btn btn-ghost normal-case text-xl'>BanksZ</a>
            <ul className='flex justify-center items-center gap-5'>
              <li>
                <a href='#'>Dashboards</a>
              </li>
              <li>
                <a href='#'>Tables</a>
              </li>
              <li>
                <a href='#'>Wallet</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <div className='text-xl'>
            <i className='fa fa-gear'></i>
          </div>
          <div className='text-xl'>
            <i className='fa fa-bell'></i>
          </div>
          <div className=''>
            <label tabIndex={0} className='avatar'>
              <div className='w-10 rounded-xl'>
                <img src={avatar} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
