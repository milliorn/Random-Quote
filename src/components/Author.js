import React from "react";

/**
 * Get the author of the quote
 * @param {*} props
 * @returns
 */
export default function Author(props) {
  return (
    <div id="quote-author">
      - <span id="author">{props.author || "Author"}</span>
    </div>
  );
}
