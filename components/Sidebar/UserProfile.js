function UserProfile({ Icon }) {
  return (
    <div className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-24 '>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='https://i1.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-9.png?w=256&ssl=1g'
        alt=''
        className='h-10 w-10 rounded-full xl:mr-2.5'
      />
      <div className='hidden xl:inline leading-5'>
        <h4 className='font-bold'>Friday101</h4>
        <p className='text-[#6e767d]'>@prajwal_ad</p>
      </div>
      <Icon className='h-5 hidden xl:inline ml-10' />
    </div>
  );
}

export default UserProfile;
