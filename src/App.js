import React, {useState, useEffect} from "react";

import { Header, Home, Footer } from "./components";
import {Route} from 'react-router-dom'
import { Container } from "react-bootstrap";

import "./styles/styles.css";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/133f20af7792d6996f8f941e3aacc86d0cef2f49/page.json')
    .then(resp => resp.json())
    .then(data => setData(data))
  }, [])

  if (!data) {
    return (
      <div className="App">
        <Header />
          <Container>
            <h1>Loading data...</h1>
          </Container>
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
