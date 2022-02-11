import React from "react";

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
