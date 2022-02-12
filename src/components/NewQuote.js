import React from "react";
import PropTypes from "prop-types";

/**
 * Get new quote
 * @param {*} props
 * @returns
 */
export default function NewQuote(props) {
  return (
    <button
      className="button"
      id="new-quote"
      type="button"
      onClick={props.getNewQuote}
    >
      new quote
    </button>
  );
}

NewQuote.propTypes = {
  getNewQuote: PropTypes.func
}