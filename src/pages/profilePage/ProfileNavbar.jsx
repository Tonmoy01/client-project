const ProfileNavbar = () => {
  return (
    <div className='navbar bg-[#051226] justify-center text-white border-t-[1px] border-[#434a59]'>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>My Profile</a>
          </li>
          <li>
            <a>Sign Out</a>
          </li>

          <li>
            <a>Share</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileNavbar;
