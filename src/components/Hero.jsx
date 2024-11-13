import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-centre flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        <button 
        type = "button"
        onClick={() => window.open('https://github.com/gawdcomplex')}
        className='black_btn'>
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
      Turn Articles into Key Insights with <br className='max-md:hidden'/>
          <span className='sky_silver_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
      Streamline your reading with ReadWrap – the open-source tool that turns long reads into crisp, clear summaries. Dive into essential insights without the fluff!      </h2>
    </header>
  )
}

export default Hero