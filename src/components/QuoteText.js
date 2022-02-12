import React from "react";
import Quote from "./Quote";
import PropTypes from "prop-types";

/**
 * Get the quoted text
 * @param {*} props
 * @returns
 */
export default function QuoteText(props) {
  return (
    <div id="quote-text">
      <Quote quote={props.quote}></Quote>
    </div>
  );
}

QuoteText.propTypes = {
  quote: PropTypes.string
}