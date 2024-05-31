import { bill, apple, google} from '../assets'

const Billing = () => {
  return (
    <section className='flex w-full flex-wrap items-flex-start justify-between mt-20 lg:mt-30 font-poppins'>
      <div className="left__section mb-5 lg:w-[40%] relative flex items-center">
        <img className='w-[100%] h-[100%] z-[10]' src={bill} alt="billing" />
        <div className="absolute top-[-20px] left-20 z-[1000] w-[50%] h-[50%] pink__gradient" />
        <div className="absolute top-0 left-0 z-[1000] w-[30%] h-[40%] white__gradient rounded-full" />
      </div>

      <div className="right__section lg:w-[40%]">
      <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          Easily control your <br />
          billing & invoicing.
        </h1>
        <p className="text-dimWhite text-[13px] sm:text-[16px] my-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="download__icons flex gap-3">
          <span className='w-[100px]'><img src={apple} className="w-[100%] h-[100%]" alt="apple" /></span>
          <span className='w-[100px]'><img src={google} className="w-[100%] h-[100%]" alt="google" /></span>
        </div>
      </div>
    </section>
  )
}
export default Billing