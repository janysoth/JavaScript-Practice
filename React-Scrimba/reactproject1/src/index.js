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
import ReactDOM from "react-dom/client";

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

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

document.getElementById("root").append(JSON.stringify(page));
