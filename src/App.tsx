import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import CrazySanta from "./components/CrazySanta/CrazySanta";
import Minting from "./components/Minting/Minting";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <CrazySanta />
      <Roadmap />
      <Minting />
      <Team />
      <div className="commounity">
        <h3>JOIN THE COMMUNITY</h3>
        <p>
          Have any questions about the project? Join the discord for more
          information.
        </p>
        <button className="join">Join the CRAZYSANT Discord</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
