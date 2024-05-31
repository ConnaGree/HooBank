const CTA = () => {
  return (
    <section className="p-5 bg-black-gradient flex justify-between mt-20 rounded-md flex-wrap">
      <div className="cta__description">
      <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          Easily control your <br />
          billing & invoicing.
        </h1>
        <p className="text-dimWhite text-[13px] sm:text-[16px] my-5">
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="cta__container">
         <button className='bg-blue-gradient font-poppins py-2 mt-5 text-[12px] font-[500] px-4 rounded-md block'>Get Started</button>
      </div>

    </section>
  )
}
export default CTA