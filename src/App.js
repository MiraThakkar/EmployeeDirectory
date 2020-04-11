import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Container from "./Components/Container";
import ResultContainer from "./Components/ResultContainer";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Container>
          <ResultContainer/>
        </Container>
      </div>
    </Router>
  );
}

export default App;
