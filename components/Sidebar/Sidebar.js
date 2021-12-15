import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/solid';
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline';

import SidebarLink from './SidebarLink';
import UserProfile from './UserProfile';

function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[380px] p-2 fixed h-full'>
      <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
        <Image src='https://rb.gy/ogau5a' alt='logo' width={27} height={27} />
      </div>
      <div className='space-y-1 mt-[5px] mb-2.5 xl:ml-24'>
        <SidebarLink text='Home' Icon={HomeIcon} active />
        <SidebarLink text='Explore' Icon={HashtagIcon} />
        <SidebarLink text='Notifications' Icon={BellIcon} />
        <SidebarLink text='Messages' Icon={InboxIcon} />
        <SidebarLink text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarLink text='Lists' Icon={ClipboardListIcon} />
        <SidebarLink text='Profile' Icon={UserIcon} />
        <SidebarLink text='More' Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* TWEET BUTTON */}
      <button className='hidden xl:inline ml-24 bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>
        Tweet
      </button>
      {/* USER PROFILE COMPONENT */}
      <UserProfile Icon={DotsHorizontalIcon} />
    </div>
  );
}

export default Sidebar;
