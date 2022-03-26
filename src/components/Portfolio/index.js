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
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://media.istockphoto.com/photos/abstract-blockchain-technology-futuristic-pixel-grid-pattern-big-picture-id1331078503?b=1&k=20&m=1331078503&s=170667a&w=0&h=R_pI3Vrld52CVbcTvX3g-8enU8udDVaR6T06Sr720jc="
            alt="crossword-puzzle"
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
            src="https://media.istockphoto.com/photos/close-up-woman-hand-hold-using-smart-phone-with-heart-icon-at-outdoor-picture-id1340024049?b=1&k=20&m=1340024049&s=170667a&w=0&h=u2OlZdzn-88Q5qv3Z757JFv9HJ4gw5DiSccxgEJGaqk="
            alt="date-match"
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
            src="https://media.istockphoto.com/photos/woman-using-calendar-app-on-computer-in-office-picture-id1301200314?b=1&k=20&m=1301200314&s=170667a&w=0&h=hPWYcFtnvL4pOSUbL9Cq7bpknFwSepL-4mrXckXWNuc="
            alt="scheduler"
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
            src="https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?b=1&k=20&m=1289411982&s=170667a&w=0&h=0R3OXR4L6LOGphYA3sul4bWQwpGj_DSl05ENiP2kRZg="
            alt="code"
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBidXNpbmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="small-business"
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

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="iPhone"
            top
          />        
          <MDBCardBody>
            <MDBCardTitle tag="h5">Social Network Database</MDBCardTitle>
            <MDBBtn
              href="https://github.com/samrapow/social-network-db-fun"
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