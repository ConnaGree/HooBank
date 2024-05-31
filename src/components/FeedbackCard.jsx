import { quotes } from "../assets"

const FeedbackCard = ({feedback}) => {
  return (
    <div className="feedback__card rounded-md px-4 py-4 w-full mb-5 lg:mb-0 lg:w-[30%] bg-black-gradient">
      <img className="w-[20px] h-[20px]" src={quotes} alt="quotes" />
      <p className="text-dimWhite text-[13px] sm:text-[16px] my-2">
        {feedback.content}
      </p>

      <div className="person flex justify-start gap-x-3">
        <img className="w-[30px] h-[30px]" src={feedback.img} alt="person" />
        <div className="title__person">
          <span className="text-[10px] text-white block">{feedback.name}</span>
          <span className="text-[9px] text-dimWhite">{feedback.title}</span>
        </div>
      </div>
    </div>
  )
}
export default FeedbackCard