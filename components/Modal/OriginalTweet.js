import Moment from 'react-moment';

const OriginalTweet = ({ post }) => {
  return (
    <div className='text-[#6e767d] flex gap-x-3 relative'>
      <span className='w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600' />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={post?.userImg} alt='' className='h-11 w-11 rounded-full' />

      <div>
        <div className='inline-block group'>
          <h4 className='font-bold text-[15px] sm:text-base text-[#d9d9d9] inline-block'>
            {post?.username}
          </h4>
          <span className='ml-1.5 text-sm sm:text-[15px]'>@{post?.tag}</span>
        </div>{' '}
        .{' '}
        <span className='hover:underline text-sm sm:text-[15px]'>
          <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
        </span>
        <p className='text-[#d9d9d9] text-[15px] sm:text-base'>{post?.text}</p>
      </div>
    </div>
  );
};

export default OriginalTweet;
