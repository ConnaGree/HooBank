import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] rounded-full bg-blue-gradient cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}>
          <div className="get__arrow flex flex-row items-center">
            <span className={`${styles.paragraph} text-gradient font-semibold`}>Get</span>
            <img src={arrowUp} className='w-[23px] ml-1 h-[23px]' alt="arrowUp" />
          </div>
          <div>
            <span className={`${styles.paragraph} text-gradient font-semibold`}>Started</span>
          </div>
      </div>
    </div>
  )
}
export default GetStarted