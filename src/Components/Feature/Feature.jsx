import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <FaRegCheckCircle className="text-green-400 mr-2"></FaRegCheckCircle> {feature}
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
