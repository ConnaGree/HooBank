import React from 'react'

const BusinessFeatures = ({ feature, bgStyle}) => {
  if (!feature) {
    console.error("Feature is undefined!"); // Log an error if feature is undefined
    return null; // Return null to avoid rendering issues
  }

  return (
    <div className={`flex w-full max-w-[500px] items-center gap-5  last:mb-0 mb-4 ${bgStyle} font-poppins p-3 rounded-[20px]`}>
      <img src={feature.icon} className="w-[25px] h-[25px]" alt={feature.title} />
      <div className="text">
        <span className="title text-[16px] sm:text-[18px] font-semibold text-white">{feature.title}</span>
        <p className="text-dimWhite text-[13px] sm:text-[16px] mt-1">{feature.content}</p>
      </div>
    </div>
  );
}

export default BusinessFeatures