import React from "react";
import Quote from "./Quote";

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
