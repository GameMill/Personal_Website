import React from 'react'


import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import {
  Home
} from "./Components/Home.js"




function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">

            <NavLink to="/" className={isActive =>
              "nav-item nav-link" + (isActive["isActive"] ? " active" : "")
            }>Home</NavLink>

            <NavLink to="/about" className={isActive =>
              "nav-item nav-link" + (isActive["isActive"] ? " active" : "")
            }>About</NavLink>

            <NavLink to="/users" className={isActive =>
              "nav-item nav-link" + (isActive["isActive"] ? " active" : "")
            }>Users</NavLink>

          </div>
        </div>
      </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="*" element={<_404 />} />
        </Routes>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function _404() {
  return <h1>404 Error</h1>
}

export default App;
