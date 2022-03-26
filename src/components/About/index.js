import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Sam Rapowitz"
          />
          <p style={{ fontSize: "27px" }}>
          Sam has spent the past two years as a Product Manager in Capital One’s innovation lab, where he shipped a new customer authentication tool and has spearheaded various efforts around crypto, gamified credit card rewards, and how Capital One can participate in the payments landscape of the emerging Metaverse. Previously, he worked as a PM for Clutch, an auto tech startup (aquired by Cox Automotive), and graduated from Yale.

          </p>
          <p style={{ fontSize: "27px" }}>
          On the side, Sam has worked on various consumer facing apps: a crowdsourced date idea discovery platform and a mobile-first social commerce platform for watches centered around an ERC-20 token and watch brand communities.  Outside of work and his side-hustles, Sam is a digital community enthusiast and moderates a watch brand community on Reddit. 
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;