//NEXTJS/REACT
import { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

// ICONS/EMOJI
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

// COMPONENTS
import { sendPost, addImageToPost, addEmoji } from '../../Helpers/input-util';

function Input() {
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const { data: session } = useSession();

  const sendPostRef = () =>
    sendPost(
      loading,
      setLoading,
      selectedFile,
      setSelectedFile,
      input,
      setInput,
      setShowEmojis,
      session
    );

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-auto ${
        loading && 'opacity-60'
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={session.user.image}
        alt=''
        className='h-11 w-11 rounded-full cursor-pointer'
      />
      <div className='w-full divide-y divide-gray-700'>
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          {/* TEXT AREA */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows='2'
            placeholder="What's happening?"
            className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]'
          />

          {selectedFile && (
            <div className='relative'>
              <div
                className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className='text-white h-5' />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedFile}
                alt=''
                className='rounded-2xl max-h-80 object-contain'
              />
            </div>
          )}
        </div>
        {!loading && (
          <div className='flex items-center justify-between pt-2.5'>
            <div className='flex items-center'>
              {/* FILE PICKER */}
              <div
                className='icon'
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className='h-[22px] text-[#1d9bf0]' />
                <input
                  type='file'
                  hidden
                  onChange={(e) => addImageToPost(e, setSelectedFile)}
                  ref={filePickerRef}
                />
              </div>

              {/* CHART BAR ICON */}
              <div className='icon rotate-90'>
                <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
              </div>

              {/* EMOJI Icon */}
              <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
              </div>

              {/* CalenderIcon */}
              <div className='icon'>
                <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
              </div>
              {showEmojis && (
                <Picker
                  onSelect={(e) => addEmoji(e, setInput, input)}
                  style={{
                    position: 'absolute',
                    marginTop: '465px',
                    marginLeft: -40,
                    maxWidth: '320px',
                    borderRadius: '20px',
                  }}
                  theme='dark'
                />
              )}
            </div>
            <button
              className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
              disabled={!input.trim() && !selectedFile}
              onClick={sendPostRef}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
