import { logo } from "../assets"
import { footerLinks } from "../constants";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <section className="mt-20 font-poppins flex justify-between flex-wrap items-start">
      <div className="description__section mb-10 md:mb-0">
        <img src={logo} alt="logo" />
        <p className="text-dimWhite text-[13px] sm:text-[16px] my-5">
          A new way to make the payments <br /> easy, reliable and secure.
        </p>
      </div>

      {footerLinks.map((footerLinks, index) => (
        <FooterList listItem={footerLinks} key={index} />
      ))}
    </section>
  );
};
export default Footer