import { airbnb, binance, coinbase, dropbox } from "../assets"

const Clients = () => {
  return (
   <section className="flex justify-between mt-20 lg:mt-20 flex-wrap items-center">
    <div className="img__container max-w-[200px] w-[20%]">
      <img className="object-contain" src={airbnb} alt="airbnb" />
    </div>

    <div className="img__container max-w-[200px] w-[20%]">
      <img className="object-contain" src={binance} alt="binance" />
    </div>
    
    <div className="img__container max-w-[200px] w-[20%]">
      <img className="object-contain" src={coinbase} alt="coinbase" />
    </div>

    <div className="img__container max-w-[200px] w-[20%]">
      <img className="" src={dropbox} alt="dropbox" />
    </div>
   </section>
  )
}
export default Clients