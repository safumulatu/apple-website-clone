import Header from "./Components/Header/Header";
import SectionOne from "./Components/Main/SectionOne";
import SectionTwo from "./Components/Main/SectionTwo";

import Footer from "./Components/Footer/Footer";
import "./css/bootstrap.css";
import "./css/styles.css";
import React, { Component } from "react";
import SectionThree from "./Components/Main/SectionThree";
import SectionFour from "./Components/Main/SectionFour";
import SectionFive from "./Components/Main/SectionFive";
import SectionSix from "./Components/Main/SectionSix";
import SectionSeven from "./Components/Main/SectionSeven";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Footer />
      </div>
    );
  }
}

export default App;
