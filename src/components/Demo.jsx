import { useState, useEffect } from 'react'

import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {

  const [article, setarticle] = useState({
    url: '',
    summary: '',
  })

  const handleSubmit = async (e) => {
    alert('Submitted');
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*search*/}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center' onSubmit={handleSubmit}
          >
            <img 
            src={linkIcon}
            alt="link_icon"
            className='absolute left-0 my-2 ml-3 w-5'
            />

            <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setarticle ({ ... article, url: e.target.value})
              }            required
            className='url_input peer'            
            />

            <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700
            peer-focus:text-gray-700'
            >
              ↵

            </button>
          </form>
          {/*browse history*/}
      </div>
      {/*Display results*/}
    </section>
  );
};

export default Demo;

