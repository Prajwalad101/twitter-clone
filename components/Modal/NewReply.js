import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
} from '@heroicons/react/outline';

const NewReply = ({ session, comment, sendComment, setComment }) => {
  return (
    <div className='mt-7 flex space-x-3 w-full'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={session.user.image} alt='' className='h-11 w-11 rounded-full' />
      <div className='flex-grow mt-2'>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Tweet your reply'
          rows='2'
          className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[80px]'
        />

        <div className='flex items-center justify-between pt-2.5'>
          <div className='flex items-center'>
            <div className='icon'>
              <PhotographIcon className='text-[#1d9bf0] h-[22px]' />
            </div>

            <div className='icon rotate-90'>
              <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
            </div>

            <div className='icon'>
              <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
            </div>

            <div className='icon'>
              <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
            </div>
          </div>
          <button
            className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
            type='submit'
            onClick={sendComment}
            disabled={!comment.trim()}
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReply;
