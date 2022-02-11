import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

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
