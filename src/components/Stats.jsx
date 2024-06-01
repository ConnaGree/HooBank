import styles from '../style'
import { stats } from '../constants'
import { useState } from 'react';

const Stats = () =>  {

  const [tickCounter, setTickCounter] = useState(0);

    return (
      <div className={`${styles.boxWidth} stats p-2 w-full flex flex-wrap justify-center gap-[1rem] lg:justify-between items-center`}>
        {stats.map((stat, index) => (
          <div className={`stat flex mb-5 items-center gap-2`} key={stat.id}>
            <span className={`text-[16px] lg:text-[30px] font-bold text-white font-poppins`}>
              {stat.value}
            </span>
            <span
              className={`text-[12] lg:text[10px] font-semibold uppercase font-poppins text-gradient`}
            >
              {stat.title}
            </span>
          </div>
        ))}
      </div>
    );
}
export default Stats