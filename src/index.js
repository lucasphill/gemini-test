import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>React App Initialized</h1>
    <p>Deploy pipeline configured with AWS OIDC Roles.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);