import React from 'react';
import Dock from './Dock';
import Photo from './Photo';

const App = ({children}) =>
  <div className="main">
    <div className="wallpaper"></div>
    <Dock />
    <Photo />
    {children}
  </div>;

export default App;