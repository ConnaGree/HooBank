import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from './GetStarted';
import Stats from './Stats'

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row justify-between flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex ${styles.flexStart} relative flex-col flex-1 xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center bg-discount-gradient py-[6px] px-[4px] rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span>
        </p>
      </div>

      <div className="flex flex-row justify-between align-items w-full">
        <h1 className="flex-1 font-poppins font-semibold text-[72px] ss:leading-[100px] leading-[90px] mt-5 text-white">
          The Next <br /> <span className="text-gradient">Generation</span>{" "}
          <br /> Payment Method
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <p
        className={`text-dimWhite flex-1 font-poppins font-normal max-w-[100%] w-[483px] leading-[25px] mt-12 text-[16px] lg:text-[18px] text-white`}
      >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>

      <div className={`w-full my-5 ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>

    <div
      className={`hero__img sm:w-full md:my-0 my-10 flex flex-1 justify-center relative ${styles.flexCenter}`}
    >
      <img
        src={robot}
        className="w-[100%] sm:mt-[3rem] h-[100%] object-contain z-[5]"
        alt="robot"
      />
      <div className="absolute top-0 left-0 z-[10] w-[30%] h-[40%] pink__gradient" />
      <div className="absolute top-0 left-0 z-[10] w-[30%] h-[40%] white__gradient rounded-full" />
    </div>
  </section>
);
export default Hero;
