import React from 'react';
import ProfileHeader from '../../components/profile/ProfileHeader';
import StepsToTake from '../../components/profile/StepsToTake';
import ProfileNavbar from './ProfileNavbar';

const ProfilePage = () => {
  return (
    <div>
      <ProfileNavbar />
      <ProfileHeader />
      <StepsToTake />
    </div>
  );
};

export default ProfilePage;
