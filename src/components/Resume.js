import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Resume from "../assets/Sam_Rapowitz_Resume_3_19_22.pdf";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={Resume} width="100%" height="750px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;