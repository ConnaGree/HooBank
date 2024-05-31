import styles from "../style";
import { features } from "../constants";
import BusinessFeatures from "./BusinessFeatures";
import { star, send, shield } from "../assets";

const Business = () => {
  console.log("features:", features); // Log the features array for debugging
  
  return (
    <section className="flex w-full flex-wrap items-flex-start justify-between lg:mt-20 leading-20">
      <div className="left__section w-full max-w-[600px] lg:w-[50%] my-5">
        <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          You do the business, <br />
          we'll handle the money.
        </h1>
        <p className="mt-5 text-dimWhite font-poppins text-[13px] sm:text-[16px] lg:text-[18px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>

      <div className="right__section lg:w-[40%] w-full">
        {features.map((feature, index) => (
          <BusinessFeatures bgStyle={index == 1 ? 'bg-black-gradient': ''} feature={feature} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
