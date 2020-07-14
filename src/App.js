import React, {useState, useEffect} from "react";

import "./styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, Home, Footer } from "./components";
import {Route} from 'react-router-dom'



function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/page.json')
    .then(resp => resp.json())
    .then(pageInfo => setData(pageInfo))
  }, [])

  if (!data) {
    return (
      <div className="App">
        <Header />
        <h1>Loading data...</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Route exact render={() => <Home  {...data}/>} path="/"/>
      <Footer />
    </div>
  );
}

export default App;
