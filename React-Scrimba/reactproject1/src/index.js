// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
// import ReactLogo from './react-logo.png';

// const navbar = (
//   <nav>
//     <h1>Bob's Bistro</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);

// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

// If the file is in public folder, only put "/"

function CustomPage() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Reasons why I'm excited to learn React</h1>
      <ul>
        <li>Well known language</li>
        <li>Used by most of the companies in the industry</li>
        <li>Able to create custom component.</li>
      </ul>
    </div>
  )
};

ReactDOM.render(<CustomPage />, document.getElementById("root"));