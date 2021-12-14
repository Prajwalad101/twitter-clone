import { signOut, useSession } from 'next-auth/react';

function UserProfile({ Icon }) {
  const { data: session } = useSession();

  return (
    <div
      className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-24'
      onClick={signOut}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={session.user.image}
        alt=''
        className='h-10 w-10 rounded-full xl:mr-2.5'
      />
      <div className='hidden xl:inline leading-5'>
        <h4 className='font-bold'>{session.user.name}</h4>
        <p className='text-[#6e767d]'>@{session.user.tag}</p>
      </div>
      <Icon className='h-5 hidden xl:inline ml-10' />
    </div>
  );
}

export default UserProfile;
