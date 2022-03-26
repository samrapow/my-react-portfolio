import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="../../assets/jungle.jpg"
            alt="jungle-background"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Wordle Clone</MDBCardTitle>
            <MDBBtn
              href="https://github.com/hak9292/Wordle2"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../../assets/crashing-waves.jpg"
            alt="crashing-waves-background"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Plan a Date for Me Generator</MDBCardTitle>
            <MDBBtn
              href="https://github.com/hak9292/dinner-and-a-movie"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="../../assets/mountain-tree.jpg"
            alt="mountain-tree-background"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Scheduler</MDBCardTitle>
            <MDBBtn
              href="https://github.com/samrapow/homework5-third-party-APIs-work-day-scheduler"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../../assets/ice-water.jpg"
            alt="ice-water-background"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Code Quiz</MDBCardTitle>
            <MDBBtn
              href="https://github.com/samrapow/homework4-web-APIs-code-quiz"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="../../assets/canyon.jpg"
            alt="canyon-background"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Small Business Note Taker</MDBCardTitle>
            <MDBBtn
              href="https://github.com/samrapow/small-biz-note-taker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;