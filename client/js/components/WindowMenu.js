import React from 'react';
import { Link } from 'react-router';

const WindowMenu = (props) =>
  <Link to="/" className="window__close">
    <svg
      className="window__close-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="21"
      viewBox="0 0 13 21"
    >
      <polygon
        fill="#EAAB06"
        fillRule="evenodd"
        points="305.938 9 295 19.5 305.938 30 308 28.02 299.125 19.5 308 10.98"
        transform="translate(-295 -9)"
      />
    </svg>
  </Link>;

export default WindowMenu;