import React from "react";

const github = "https://github.com/milliorn";
/**
 * Footer component
 * @returns
 */
export default function Footer() {
  return (
    <footer>
      source code @{" "}
      <a href={github} target="_blank" rel="noreferrer">
        github
      </a>
    </footer>
  );
}
