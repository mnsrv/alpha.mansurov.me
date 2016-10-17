import React from 'react';
import { Link } from 'react-router';

const Dock = () =>
  <div className="dock">
    <Link to="/notes" className="dock__icon dock__icon_notes" />
    <div className="dock__divider"></div>
    <a href="https://twitter.com/sashamjolnir" target="_blank" className="dock__icon dock__icon_twitter" />
  </div>;

export default Dock;