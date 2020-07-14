import React from "react";
import { Container } from "react-bootstrap";

import "../styles/home.css";
import { Galery, RichText, CallUsForm } from "./index";


function Home({ components, form }) {
  
  return (
    <div className="home">
      <Container>
        <h1 className="home__title">{components[0].metadata.title}</h1>
        <Galery images={components[0].metadata.images} slidesPerView={components[0].metadata.slidesPerView}/>

        <RichText {...components[1].metadata} />

        <CallUsForm  {...form} />

      </Container>
    </div>
  );
}

export default Home;
