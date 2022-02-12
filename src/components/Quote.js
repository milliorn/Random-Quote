import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import PropTypes from "prop-types";

/**
 * Insert quotes before and after text
 * @param {*} props
 * @returns
 */
export default function Quote(props) {
  return (
    <span id="text">
      <ImQuotesLeft /> {props.quote || "Quote"} <ImQuotesRight />
    </span>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
};

Quote.defaultProps = {
  quote: "quote",
};
