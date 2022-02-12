import React from "react";
import { FaTwitter } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * Twitter
 */
export default function TwitterButton(props) {
  return (
    <button
      className="button"
      id="tweet-quote"
      title="Tweet this quote!"
      target="_top"
      type="button"
    >
      <a
        href={`https://twitter.com/intent/tweet?text=${props.userData.quote}- ${props.userData.author}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </a>
    </button>
  );
}

TwitterButton.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

TwitterButton.defaultProps = {
  quote: "quote",
  author: "author",
};
