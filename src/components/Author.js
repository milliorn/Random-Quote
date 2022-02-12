import React from "react";
import PropTypes from "prop-types";

/**
 * Get the author of the quote
 * @param {*} props 
 * @returns 
 */
export default function Author(props) {
  return (
    <div id="quote-author">
      - <span id="author">{props.author}</span>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string
}
