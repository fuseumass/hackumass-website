import { useMemo } from "react";
import PropTypes from "prop-types";

const SponsorsCard = ({ className = "", propFlex, propMinWidth }) => {
  const sponsorsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`h-64 flex-1 relative min-w-[343px] max-w-full mq1100:min-w-full ${className}`}
      style={sponsorsStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-lightest-grey" />
      <img
        className="absolute h-[62.5%] w-[88.98%] top-[18.75%] right-[5.53%] bottom-[18.75%] left-[5.49%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        alt=""
        src="/image-15@2x.png"
      />
    </div>
  );
};

SponsorsCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default SponsorsCard;
