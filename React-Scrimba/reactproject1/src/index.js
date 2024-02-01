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
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};

function MainContent() {
  return (
    <div>
      <h1>Reasons why I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  );
};

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="/react-logo.png" alt="React Logo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

function Footer() {
  return (
    <footer>
      <small>© 2024, Jonny Vorn Soth Development. All Rights Reserved.</small>
    </footer>
  );
};

ReactDOM.render(<CustomPage />, document.getElementById("root"));