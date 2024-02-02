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
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
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
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};

ReactDOM.render(<CustomPage />, document.getElementById("root"));