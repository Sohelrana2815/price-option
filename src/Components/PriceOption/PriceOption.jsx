import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h3 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h3>
      <h3 className="text-3xl text-center my-8">{name}</h3>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className=" mt-10 rounded-lg font-bold hover:bg-secondary w-full bg-green-400 py-3">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
