import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <h4>
            Let me know if I can be of assistance!
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:678-350-5371">
            <MDBIcon icon="phone-alt" /> 678-350-5371
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:samrapow@gmail.com">
            <MDBIcon icon="envelope" /> samrapow@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
