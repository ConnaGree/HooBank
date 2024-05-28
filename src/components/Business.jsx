import styles from "../style";
import { features } from "../constants";
import CardDeal from "./CardDeal";
import { star, send, shield } from "../assets";

const Business = () => {
  return (
    <section className="flex items-center justify-between lg:mt-20 mt-15 leading-20">
      <div className="left__section flex-1">
        <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          You do the business, <br />
          we'll handle the money.
        </h1>
        <p className="mt-5 text-dimWhite font-poppins font-[18px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>

      <div className="right__section flex-1">
          <CardDeal feature={features[0]} key={features[0].id} icon={star}/>
      </div>
    </section>
  );
};
export default Business;
