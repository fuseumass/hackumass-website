import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  propPosition,
  propTop,
  propRight,
  applicationsOpen,
}) => {
  const buttonDynamicStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      right: propRight,
    };
  }, [propPosition, propTop, propRight]);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-64 relative h-[46px] ${className}`}
      style={buttonDynamicStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-lightest-grey" />
      <div className="absolute h-[calc(100%_-_26px)] w-[calc(100%_-_60.2px)] top-[13px] left-[30px] text-lg leading-[151.28%] font-semibold font-body text-text-secondary text-center flex items-center justify-center">
        {applicationsOpen}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  applicationsOpen: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propRight: PropTypes.any,
};

export default Button;
