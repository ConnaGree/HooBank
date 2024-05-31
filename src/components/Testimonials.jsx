import { feedback } from "../constants"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
   <section className=" mt-20 lg:mt-20 font-poppins">
    <div className="feedback__description mb-5 lg:w-[40%] w-full">
    <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          What people are <br />
          saying about us
        </h1>
        <p className="text-dimWhite text-[13px] sm:text-[16px] my-5">
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
    </div>
    <div className="feedback__cards w-full flex flex-wrap justify-between">
      {feedback.map((item, index) => (
        <FeedbackCard key={index} feedback={item} />
      ))}
    </div>
   </section>
  )
}
export default Testimonials