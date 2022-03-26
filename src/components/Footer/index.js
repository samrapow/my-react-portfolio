import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/samrapow"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/sam-rapowitz-2a79a7108/"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="https://github.com/samrapow/my-react-portfolio">
          {" "}
          Sam Rapowitz
        </a>
      </div>
    </footer>
  );
}

export default Footer;
