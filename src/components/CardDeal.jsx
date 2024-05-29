const CardDeal = ({ feature }) => {
  if (!feature) {
    console.error("Feature is undefined!"); // Log an error if feature is undefined
    return null; // Return null to avoid rendering issues
  }

  return (
    <div className={`flex last:mb-0 mb-4`}>
      <img src={feature.icon} alt={feature.title} />
      <div className="text text-white">
        <span className="title text-[16px] text-dimWhite">{feature.title}</span>
        <p>{feature.content}</p>
      </div>
    </div>
  );
};

export default CardDeal;
