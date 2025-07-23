import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [{ nickname:'제로초' }, { nickname:'바보' }, { nickname:'네로' }];
  const followingList = [{ nickname:'제로초' }, { nickname:'바보' }, { nickname:'네로' }];

  return(
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm/>
      <FollowList header="팔로워목록" data={followerList}/>
      <FollowList header="팔로윙목록" data={followingList}/>
    </AppLayout>
  )
}

export default Profile;