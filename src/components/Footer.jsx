import { logo } from "../assets"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <section>
      <div className="description__section">
        <img src={logo} alt="logo" />
        <p className="text-dimWhite text-[13px] sm:text-[16px] my-5">
        A new way to make the payments easy, reliable and secure.
        </p>
      </div>

    </section>
  )
}
export default Footer